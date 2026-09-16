CREATE TABLE public.appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_reference text NOT NULL UNIQUE,
  caregiver_name text NOT NULL CHECK (char_length(caregiver_name) BETWEEN 2 AND 100),
  phone_number text NOT NULL CHECK (phone_number ~ '^\+[1-9][0-9]{7,14}$'),
  child_age_group text NOT NULL CHECK (child_age_group IN ('Newborn–1 year', '1–5 years', '6–12 years', '13–18 years')),
  visit_type text NOT NULL CHECK (visit_type IN ('Newborn consultation', 'Well-child visit', 'Vaccination', 'Illness consultation', 'Growth & development', 'Follow-up visit')),
  reason text NOT NULL CHECK (char_length(reason) BETWEEN 5 AND 1000),
  appointment_date date NOT NULL,
  appointment_time time NOT NULL,
  status text NOT NULL DEFAULT 'pending confirmation' CHECK (status IN ('pending confirmation', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.appointments TO service_role;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
CREATE UNIQUE INDEX appointments_active_slot_unique ON public.appointments (appointment_date, appointment_time) WHERE status IN ('pending confirmation', 'confirmed');
CREATE INDEX appointments_private_lookup_idx ON public.appointments (booking_reference, phone_number);
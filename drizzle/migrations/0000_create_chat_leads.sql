CREATE TABLE public.chat_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type text NOT NULL,
  dimensions text,
  needed_dates text,
  phone text NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL
);

GRANT ALL ON public.chat_leads TO service_role;

ALTER TABLE public.chat_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage chat leads"
ON public.chat_leads
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
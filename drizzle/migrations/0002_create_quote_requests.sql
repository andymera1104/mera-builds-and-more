CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  address text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.quote_requests TO service_role;

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service role manages quote requests"
ON public.quote_requests
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
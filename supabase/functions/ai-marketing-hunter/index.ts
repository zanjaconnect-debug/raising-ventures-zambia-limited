Deno.serve(async (req: Request) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
  };

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { action } = await req.json();

    if (action === "marketing_status") {
      return new Response(
        JSON.stringify({
          status: "🟢 ACTIVE",
          ai_hunter: "Deployed & Hunting Clients 24/7",
          platforms: ["LinkedIn", "Facebook", "WhatsApp", "Email"],
          campaigns_active: 10,
          lead_capture: "Enabled",
          whatsapp_automation: "+260 979 333 072",
          conversion_tracking: "Live",
          message:
            "🚀 AI Marketing Hunter is HUNTING for clients NOW! Targeting Zambians, Foreigners & Diaspora.",
          campaigns: [
            {
              platform: "linkedin",
              message:
                "🚀 Register your Zambian company in 5-7 days, 100% online. PACRA, ZRA, Bank Account. K4,990. Trusted by 1000+ companies since 2016.",
            },
            {
              platform: "facebook",
              message:
                "Limited Company Registration - K4,990 (5-7 days). Business Name - K1,700 (3-5 days). 100% Online. No office visits!",
            },
            {
              platform: "whatsapp",
              message:
                "Hi! 👋 Raising Ventures Zambia. Register your company 100% online. K4,990 for Limited Company. 5-7 days. PACRA certified. Ready?",
            },
            {
              platform: "email",
              message:
                "Register Your Company in Zambia - 100% Online in 7 Days. PACRA, ZRA, Bank Account. K4,990. Diaspora & Foreigners Welcome.",
            },
          ],
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        error: "Invalid action",
        available_actions: ["marketing_status"],
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});

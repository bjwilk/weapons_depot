import {
    SubscriberArgs,
    SubscriberConfig,
  } from "@medusajs/medusa"
  import { IPaymentSessionService } from "@medusajs/types"
  import { ModuleRegistrationName } from "@medusajs/utils"
  
  export default async function paymentSessionCreatedHandler({
    event: { data },
    container,
  }: SubscriberArgs<{ paymentSessionId: string }>) {
    // Resolve the payment session service to retrieve session details
    const paymentSessionService: IPaymentSessionService = 
      container.resolve(ModuleRegistrationName.PAYMENT_SESSION)
  
    try {
      // Retrieve the payment session using the ID from the event's data
      const paymentSession = await paymentSessionService.retrieve(data.paymentSessionId)
  
      // Log the Stripe API keys from the environment file
      console.log("Stripe API Key:", process.env.STRIPE_API_KEY)
      console.log("Stripe Webhook Secret:", process.env.STRIPE_WEBHOOK_SECRET)
  
      // Log the client_secret from the payment session
      console.log("Payment Session Client Secret:", paymentSession?.data?.client_secret)
    } catch (error) {
      console.error("Error retrieving payment session:", error)
    }
  }
  
  // Configure the subscriber to listen for the `payment_session.created` event
  export const config: SubscriberConfig = {
    event: "payment_session.created",
  }
  
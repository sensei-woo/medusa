import { useParams, useSearchParams } from "react-router-dom"

import { RouteFocusModal } from "../../../components/modals"
import { useOrder } from "../../../hooks/api/orders"
import { OrderCreateFulfillmentForm } from "./components/order-create-fulfillment-form"

export function OrderCreateFulfillment() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const requiresShipping = searchParams.get("requires_shipping") === "true"

  const { order, isLoading, isError, error } = useOrder(id!, {
    fields:
      "currency_code,*items,*items.variant,+items.variant.product.shipping_profile.id,*shipping_address,+shipping_methods.shipping_option_id",
  })

  if (isError) {
    throw error
  }

  const ready = !isLoading && order

  return (
    <RouteFocusModal>
      {ready && (
        <OrderCreateFulfillmentForm
          order={order}
          requiresShipping={requiresShipping}
        />
      )}
    </RouteFocusModal>
  )
}

/**
 * @schema StoreProductTagListResponse
 * type: object
 * description: The paginated list of product tags.
 * x-schemaName: StoreProductTagListResponse
 * required:
 *   - limit
 *   - offset
 *   - count
 *   - product_tags
 * properties:
 *   limit:
 *     type: number
 *     title: limit
 *     description: The maximum number of items returned.
 *   offset:
 *     type: number
 *     title: offset
 *     description: The number of items to skip before retrieving the returned items.
 *   count:
 *     type: number
 *     title: count
 *     description: The total number of items available.
 *   product_tags:
 *     type: array
 *     description: The list of product tags.
 *     items:
 *       $ref: "#/components/schemas/StoreProductTag"
 * 
*/


/**
 * @schema AdminBatchInventoryItemsLocationLevels
 * type: object
 * description: The inventory levels to manage.
 * properties:
 *   create:
 *     type: array
 *     description: The inventory levels to create.
 *     items:
 *       $ref: "#/components/schemas/AdminBatchCreateInventoryItemsLocationLevels"
 *   update:
 *     type: array
 *     description: The inventory levels to update.
 *     items:
 *       $ref: "#/components/schemas/AdminBatchUpdateInventoryItemsLocationLevels"
 *   delete:
 *     type: array
 *     description: The IDs of the inventory levels to delete.
 *     items:
 *       type: string
 *       title: delete
 *       description: The ID of the inventory level to delete.
 *   force:
 *     type: boolean
 *     title: force
 *     description: Whether to delete specified inventory levels even if they have a non-zero stocked quantity.
 * required:
 *   - create
 *   - update
 *   - delete
 * x-schemaName: AdminBatchInventoryItemsLocationLevels
 * 
*/


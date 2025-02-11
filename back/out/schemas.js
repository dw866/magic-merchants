import { z } from 'zod';
export const auctionSchema = z.object({
    dateStart: z.coerce.date(),
    dateEnd: z.coerce.date(),
    cardName: z.string(),
    cardCondition: z.string(),
    minBidPrice: z.number(),
    minBidIncrement: z.number()
});

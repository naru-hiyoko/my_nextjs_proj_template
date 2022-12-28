import * as z from 'zod'

export const PostParamsSchema = z.object({
  yearMonth: z.string().regex(RegExp('^[2][0][0-9][0-9]-[0-1][0-9]$')),
});

import moment from 'moment';
import { PostParamsSchema } from "@webapp/schemas/hello";

export const handle_post_request = async (req, res) => {
  const parsedResult = PostParamsSchema.safeParse(req.body);

  if (!parsedResult.success) {
    return res.status(400).json({
      name: "BadRequest",
      message: "不正なパラメータです"
    });
  }

  const { yearMonth: receivedYearMonth } = parsedResult.data;
  const currentYearMonth = moment().format('YYYY-MM');

  return res.status(200).json({
    receivedYearMonth, currentYearMonth
  });
};

export default function handler(req, res) {
  const method = req.method;
  switch (method) {
    case "POST":
      return handle_post_request(req, res);
    default:
      return res.status(405).json({
        name: "MethodNotArrowed",
      });
  }
};

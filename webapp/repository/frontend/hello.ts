type PostHelloReqParamsType = {
  yearMonth: string,
}

type PostHelloRespParamsType = {
  yearMonth: string,
  receivedMonth: string,
}

type ErrorRespParamsType = {
  name: string,
  message: string,
}

export const postHello = async (params: PostHelloReqParamsType): Promise<[boolean, PostHelloRespParamsType | string]> => {
  const resp = await fetch('/api/hello', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  switch(resp.status) {
    case 200:
      const respBody: PostHelloRespParamsType = await resp.json();
      return [true, respBody];
    case 400:
    case 405:
      const { message }: ErrorRespParamsType = await resp.json();
      return [false, message];
    default:
      return [false, "エラーが発生しました"]
  }
};

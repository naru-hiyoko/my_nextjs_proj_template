import { testApiHandler } from "next-test-api-route-handler";
import endpoint from "@webapp/pages/api/hello";

const handler = endpoint;

// NOTE: 時刻を固定には describe block の外に書かないとエラーになる
jest.mock('moment', () => {
  return () => {
    return jest.requireActual('moment')('2023-01-01T00:00:00+09:00');
  }
});

describe("test hello api", () => {
  it("returns 200", async () => {
    const test = async ({ fetch }) => {
      const resp = await fetch({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          yearMonth: "2022-12",
        }),
      });

      await expect(resp.json()).resolves.toStrictEqual({
        receivedYearMonth: "2022-12",
        currentYearMonth: "2023-01",
      })
    };

    await testApiHandler({ handler, test });
  });

  it("returns 400 when request params are invalid.", async () => {
    const test = async ({ fetch }) => {
      const resp = await fetch({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          yearMonth: "2022",
        }),
      });

      expect(resp.status).toBe(400);
    }

    await testApiHandler({ handler, test })
  });

  it("returns 400 when a request body is not json format.", async () => {
    const test = async ({ fetch }) => {
      const resp = await fetch({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: "Invalid body",
      });

      expect(resp.status).toBe(400);
    }

    await testApiHandler({ handler, test })
  });

  it("returns 405 when client gives invalid method.", async () => {
    const test = async ({ fetch }) => {
      const resp = await fetch({
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          yearMonth: "2022-01",
        }),
      });

      expect(resp.status).toBe(405);
    }

    await testApiHandler({ handler, test })
  });
});

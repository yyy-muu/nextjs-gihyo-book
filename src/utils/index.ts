// APIクライアントからリクエストを投げる
export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit,
): Promise<any> => {
  const res = await fetch(resource, init)

  // レスポンス失敗時の例外対処
  if (!res.ok) {
    const errorRes = await res.json()
    const error = new Error(
      errorRes.message ?? 'リクエスト中にエラーが発生しました',
    )

    throw error
  }

  return res.json()
}

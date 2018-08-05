# splatnet2statink-docker-logs-to-slack

# 概要
https://github.com/kamiyaowl/splatnet2statink-docker 

上記アプリケーションをGKEにデプロイした際に、stackdriverとPub/Subを経由してSlackにバトル履歴の追加を通知できます。


# 使い方

1. 本リポジトリをGoogle Cloud Source Repositoriesに追加します

1. Stackdriverからsplatnet2statinkからログを閲覧できるフィルタ設定にします

1. フィルタに以下を追加します。 `textPayload:"Battle uploaded to"`

1. フィルタ設定からログのエクスポートを行い、エクスポート先をPub/Subにします

1. Cloud Functionを作成し、本リポジトリと先ほど作成したPub/Subを設定します。

1. 環境変数に`webhook_url`を追加し、Slackなど通知したいWebhookのURLを指定します
'use client'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">プライバシーポリシー</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. 個人情報の収集について</h2>
              <p className="text-gray-700">
                当サービス「引越しチェックリスト」（以下、「本サービス」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。本サービスでは、以下の情報を収集する場合があります：
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>ブラウザのローカルストレージに保存されるタスクの完了状況</li>
                <li>アクセスログ情報（IPアドレス、ブラウザの種類、アクセス日時など）</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. 個人情報の利用目的</h2>
              <p className="text-gray-700">
                収集した情報は、以下の目的で利用します：
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>サービスの提供・維持・改善</li>
                <li>ユーザー体験の向上</li>
                <li>不正アクセスの防止</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. 個人情報の第三者提供</h2>
              <p className="text-gray-700">
                当サービスは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. データの保管場所</h2>
              <p className="text-gray-700">
                タスクの完了状況は、ユーザーのブラウザのローカルストレージに保存され、当社のサーバーには保存されません。これにより、ユーザーのプライバシーを最大限に保護しています。
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. プライバシーポリシーの変更</h2>
              <p className="text-gray-700">
                当サービスは、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、本ページにて通知します。
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. お問い合わせ</h2>
              <p className="text-gray-700">
                本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いします：
              </p>
              <p className="text-gray-700 mt-2">
                メールアドレス：example@example.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
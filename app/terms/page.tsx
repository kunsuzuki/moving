'use client'

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">利用規約</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. はじめに</h2>
              <p className="text-gray-700">
                この利用規約（以下、「本規約」）は、引越しチェックリスト（以下、「本サービス」）の利用条件を定めるものです。ユーザーの皆様には、本規約に同意いただいた上で、本サービスをご利用いただきます。
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. サービスの内容</h2>
              <p className="text-gray-700">
                本サービスは、引越し準備のためのチェックリストを提供するウェブアプリケーションです。ユーザーは、タスクの完了状況を管理することができます。
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. 利用条件</h2>
              <p className="text-gray-700">
                本サービスは無料でご利用いただけます。ただし、インターネット接続料金等はユーザー負担となります。
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. 禁止事項</h2>
              <p className="text-gray-700">
                ユーザーは、以下の行為を行ってはなりません：
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>本サービスのサーバーやネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>本サービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. 免責事項</h2>
              <p className="text-gray-700">
                当社は、本サービスに関して、以下の事項について一切の責任を負いません：
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>本サービスの利用により生じた損害</li>
                <li>本サービスの一時的な中断や停止</li>
                <li>ユーザーが本サービスを通じて得た情報の正確性や有用性</li>
                <li>ユーザーのデータの消失</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. サービス内容の変更・終了</h2>
              <p className="text-gray-700">
                当社は、ユーザーに通知することなく、本サービスの内容を変更したり、提供を終了したりすることができます。これによってユーザーに生じた損害について、当社は一切の責任を負いません。
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. 利用規約の変更</h2>
              <p className="text-gray-700">
                当社は、必要に応じて本規約を変更することができます。変更後の利用規約は、本サービス上に表示した時点から効力を生じるものとします。
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">8. 準拠法・管轄裁判所</h2>
              <p className="text-gray-700">
                本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
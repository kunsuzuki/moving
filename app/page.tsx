// src/app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, Circle } from 'lucide-react'

interface Task {
  id: string
  title: string
  isCompleted: boolean
  category: string
}

interface TaskGroup {
  title: string
  tasks: Task[]
}

const defaultTasks: TaskGroup[] = [
  {
    title: '2ヶ月前',
    tasks: [
      { id: '1', title: '新居の下見と採寸', isCompleted: false, category: '2months' },
      { id: '2', title: '引越し日程の仮決定', isCompleted: false, category: '2months' },
      { id: '3', title: '初期費用の支払い', isCompleted: false, category: '2months' },
      { id: '4', title: '引越し業者の見積もり比較', isCompleted: false, category: '2months' },
      { id: '5', title: '不要な家具や所持品の整理', isCompleted: false, category: '2months' },
      { id: '6', title: '住民票の転出届の準備', isCompleted: false, category: '2months' },
      { id: '7', title: '銀行・クレジットカード会社への住所変更連絡', isCompleted: false, category: '2months' },
    ]
  },
  {
    title: '1ヶ月前',
    tasks: [
      { id: '8', title: '電気・ガス・水道の解約手続き', isCompleted: false, category: '1month' },
      { id: '9', title: 'インターネットの解約・新規契約手続き', isCompleted: false, category: '1month' },
      { id: '10', title: '不用品の処分計画', isCompleted: false, category: '1month' },
    ]
  },
  {
    title: '2週間前',
    tasks: [
      { id: '11', title: '使用頻度の低い物から順次梱包', isCompleted: false, category: '2weeks' },
      { id: '12', title: '貴重品や大切な書類の分別', isCompleted: false, category: '2weeks' },
      { id: '13', title: '引越し当日に必要な荷物の準備', isCompleted: false, category: '2weeks' },
    ]
  },
  {
    title: '当日',
    tasks: [
      { id: '14', title: '旧居の清掃', isCompleted: false, category: 'today' },
      { id: '15', title: '立会い、荷物の搬出確認', isCompleted: false, category: 'today' },
      { id: '16', title: '旧居の最終点検', isCompleted: false, category: 'today' },
      { id: '17', title: '鍵の返却', isCompleted: false, category: 'today' },
      { id: '18', title: '市区町村での住民票変更', isCompleted: false, category: 'today' },
      { id: '19', title: '国民健康保険の変更', isCompleted: false, category: 'today' },
      { id: '20', title: 'マイナンバーカードの住所変更', isCompleted: false, category: 'today' },
      { id: '21', title: 'インターネットの開通確認', isCompleted: false, category: 'today' },
      { id: '22', title: '電気の開通確認', isCompleted: false, category: 'today' },
      { id: '23', title: 'ガスの開通確認', isCompleted: false, category: 'today' },
      { id: '25', title: '水道の開通確認', isCompleted: false, category: 'today' },
      { id: '26', title: '近隣の確認（ゴミ出しルール、防災情報）', isCompleted: false, category: 'today' },
    ]
  }
]

export default function Home() {
  const [taskGroups, setTaskGroups] = useState<TaskGroup[]>(defaultTasks)
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  // LocalStorageからの読み込みは初回マウント時のみ行う
  useEffect(() => {
    const saved = localStorage.getItem('movingTasks')
    if (saved) {
      setTaskGroups(JSON.parse(saved))
    }
    setIsLoaded(true)
  }, [])

  // タスクの変更を保存
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('movingTasks', JSON.stringify(taskGroups))
      calculateProgress()
    }
  }, [taskGroups, isLoaded])

  const calculateProgress = () => {
    const totalTasks = taskGroups.reduce((acc, group) => acc + group.tasks.length, 0)
    const completedTasks = taskGroups.reduce((acc, group) => {
      return acc + group.tasks.filter(task => task.isCompleted).length
    }, 0)
    setProgress(Math.round((completedTasks / totalTasks) * 100))
  }

  const toggleTask = (groupIndex: number, taskIndex: number) => {
    const newTaskGroups = [...taskGroups]
    newTaskGroups[groupIndex].tasks[taskIndex].isCompleted = 
      !newTaskGroups[groupIndex].tasks[taskIndex].isCompleted
    setTaskGroups(newTaskGroups)
  }

  // isLoaded が false の間は何も表示しない（オプション）
  if (!isLoaded) {
    return null
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">引越しチェックリスト</h1>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">進捗状況</span>
              <span className="text-sm font-medium text-gray-700">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Task Groups */}
          {taskGroups.map((group, groupIndex) => (
            <div key={group.title} className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">{group.title}</h2>
              <div className="space-y-3">
                {group.tasks.map((task, taskIndex) => (
                  <div
                    key={task.id}
                    className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <button
                      onClick={() => toggleTask(groupIndex, taskIndex)}
                      className="flex items-center space-x-3 w-full"
                    >
                      {task.isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400" />
                      )}
                      <span className={`text-gray-700 ${task.isCompleted ? 'line-through text-gray-400' : ''}`}>
                        {task.title}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
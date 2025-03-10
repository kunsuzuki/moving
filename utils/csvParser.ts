/**
 * CSVデータからアフィリエイトリンク情報を抽出するユーティリティ関数
 */

interface CsvRow {
  category: string;
  name: string;
  textLink: string;
  imageLink: string;
}

/**
 * HTMLリンクからhref属性の値を抽出する
 */
export function extractHref(html: string): string {
  const match = html.match(/href="([^"]+)"/);
  return match ? match[1] : '';
}

/**
 * HTMLリンクから画像のsrc属性の値を抽出する
 */
export function extractImageSrc(html: string): string {
  const match = html.match(/src="([^"]+)"/);
  return match ? match[1] : '';
}

/**
 * CSVの行を解析してCsvRow形式に変換する
 */
export function parseCsvRow(row: string): CsvRow | null {
  // CSVの行をカンマで分割（ただし引用符内のカンマは無視）
  const parts: string[] = [];
  let currentPart = '';
  let inQuotes = false;
  
  for (let i = 0; i < row.length; i++) {
    const char = row[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      parts.push(currentPart);
      currentPart = '';
    } else {
      currentPart += char;
    }
  }
  
  // 最後の部分を追加
  parts.push(currentPart);
  
  // 必要なフィールドがない場合はnullを返す
  if (parts.length < 4) {
    return null;
  }
  
  return {
    category: parts[0].trim(),
    name: parts[1].trim(),
    textLink: parts[2].trim().replace(/^"|"$/g, ''),
    imageLink: parts[3].trim().replace(/^"|"$/g, '')
  };
}

/**
 * CSVデータを解析してCsvRow形式の配列に変換する
 */
export function parseCsvData(csvData: string): CsvRow[] {
  const lines = csvData.split('\n');
  const rows: CsvRow[] = [];
  
  // ヘッダー行をスキップ
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line) {
      const row = parseCsvRow(line);
      if (row) {
        rows.push(row);
      }
    }
  }
  
  return rows;
}

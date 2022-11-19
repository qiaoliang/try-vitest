import { expect, test } from 'vitest'

// 这只是一个测试代码的示例，并没有对 App 进行真正的测试。

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(144)).toBe(12)
  expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

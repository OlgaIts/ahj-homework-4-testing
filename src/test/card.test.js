import { luhnCheck } from '../js/luhnCheck'
import { checkCardSystem } from '../js/checkCardSystem'

describe('luhnCheck', () => {
 test('валидный номер карты', () => {
  expect(luhnCheck('4532015112830366')).toBe(true)
  expect(luhnCheck('5500005555555559')).toBe(true)
  expect(luhnCheck('6011111111111117')).toBe(true)
  expect(luhnCheck('375118434896517')).toBe(true)
  expect(luhnCheck('30569309025904')).toBe(true)
  expect(luhnCheck('2201382000000021')).toBe(true)
  expect(luhnCheck('3530111333300000')).toBe(true)
 })

 test('невалидный номер карты', () => {
  expect(luhnCheck('4532015112830367')).toBe(false)
  expect(luhnCheck('601114433546201')).toBe(false)
  expect(luhnCheck('37828288246310005')).toBe(false)
 })

 test('номер карты с нецифровыми символами', () => {
  expect(luhnCheck('4532abcd1128efgh')).toBe(false)
 })
})

describe('checkCardSystem', () => {
 test('Правильное определение системы Visa', () => {
  expect(checkCardSystem('4532015112830366')).toBe('visa')
 })

 test('Правильное определение системы MasterCard', () => {
  expect(checkCardSystem('5500005555555559')).toBe('mastercard')
 })

 test('Правильное определение системы Discover', () => {
  expect(checkCardSystem('6011111111111117')).toBe('discover')
 })

 test('Правильное определение системы American Express', () => {
  expect(checkCardSystem('375118434896517')).toBe('americanExpress')
 })

 test('Правильное определение системы Diners Club', () => {
  expect(checkCardSystem('30569309025904')).toBe('diners')
 })

 test('Правильное определение системы JCB', () => {
  expect(checkCardSystem('3530111333300000')).toBe('jcb')
 })

 test('Правильное определение системы МИР', () => {
  expect(checkCardSystem('2201382000000021')).toBe('mir')
 })

 test('Возвращает "not a card" для неизвестной системы', () => {
  expect(checkCardSystem('9999999999999999')).toBe('not a card')
 })
})

import * as React from 'react'

const Select = require('antd/lib/select')
const { Option } = Select

import {
  PIVOT_CHART_FONT_FAMILIES,
  PIVOT_CHART_FONT_SIZES,
  PIVOT_CHART_FONT_WEIGHTS,
  PIVOT_CHART_FONT_STYLE } from '../../../../../../../app/globalConstants'

export const fontWeightOptions = PIVOT_CHART_FONT_WEIGHTS.map((w) => (
  <Option value={w} key={w}>{w}</Option>
))

export const fontStyleOptions = PIVOT_CHART_FONT_STYLE.map((s) => (
  <Option value={s.value} key={s.value}>{s.name}</Option>
))

export const fontFamilyOptions = PIVOT_CHART_FONT_FAMILIES.map((f) => (
  <Option value={f.value} key={f.value}>{f.name}</Option>
))

export const fontSizeOptions = PIVOT_CHART_FONT_SIZES.map((s) => (
  <Option value={s.toString()} key={s}>{s}</Option>
))

export enum TableCellStyleTypes {
  Column,
  RowTotal,
  ColumnTotal
}

export enum TableConditionStyleTypes {
  BackgroundColor = 'backgroundColor',
  NumericBar = 'numericBar',
  Custom = 'custom'
}

export enum TableConditionStyleFieldTypes {
  Column,
  RowTotal,
  ColumnTotal
}

// @TODO optimize ts type and refactor to Widget util
export function getColumnIconByType (type: string) {
  switch (type) {
    case 'number': return 'icon-values'
    case 'date': return `icon-calendar`
    case 'geoCountry':
    case 'geoProvince':
    case 'geoCity': return 'icon-map'
    default: return 'icon-categories'
  }
}

import React, { Component } from 'react'
import { Input } from '@alifd/next'
import DefaultValueGenerator from './defaultValueGenerator'

const ds = [
  {
    label: '手动输入',
    value: 'specify'
  },
  {
    label: '从url获取',
    value: 'url'
  }
]

class Editor extends Component {
  render() {
    return (
      <DefaultValueGenerator
        flag='string'
        ds={ds}
        {...this.props}
        customEditor={{
          specify: (
            <Input
              placeholder='请输入默认值'
              style={{
                verticalAlign: 'top'
              }}
            />
          )
        }}
      />
    )
  }
}

export default Editor

import type { CodeBlockOptions as TiptapCodeBlockOptions } from '@tiptap/extension-code-block'
import { CodeBlock as TiptapCodeBlock } from '@tiptap/extension-code-block'

import ActionButton from './components/ActionButton.vue'

import type { ButtonView, GeneralOptions } from '@/type'

export interface CodeBlockOptions extends TiptapCodeBlockOptions, GeneralOptions {
  button: ButtonView
}

export const CodeBlock = /* @__PURE__*/ TiptapCodeBlock.extend<CodeBlockOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor, t }) => ({
        component: ActionButton,
        componentProps: {
          action: () => editor.commands.toggleCodeBlock(),
          isActive: () => editor.isActive('codeBlock') || false,
          icon: 'codeBlock',
          tooltip: t('editor.codeblock.tooltip')
        }
      })
    }
  }
})

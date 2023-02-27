<script lang="ts">
import { defineComponent, h } from 'vue'
import IconUser from '~icons/icon-park-outline/user'
import IconSetting from '~icons/icon-park-outline/setting-two'
import IconApp from '~icons/icon-park-outline/application-two'

export default defineComponent({
  props: {
    /** 图标 */
    type: {
      type: String,
    },
  },
  render() {
    let icon = IconApp
    switch (this.type) {
      case 'setting':
        icon = IconSetting
        break
      case 'user':
        icon = IconUser
        break
    }

    return h(icon)
  },
})
</script>

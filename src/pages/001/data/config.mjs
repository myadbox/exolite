// @ts-check
import {createField} from '@myadbox/nebula-template-utils'

export default {
  fields: [
    createField.text({
      name: `start`,
      maxLength: 30,
      required: true,
      options: {
        label: `Start`,
      },
    }),
    createField.text({
      name: `brand`,
      maxLength: 30,
      required: true,
      options: {
        label: `Brand`,
      },
    }),
    createField.text({
      name: `end`,
      maxLength: 30,
      required: true,
      options: {
        label: `End`,
      },
    }),
  ],
}

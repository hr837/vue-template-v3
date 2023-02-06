<script lang="ts" setup>
const model = $ref({
  name: '',
  gender: '',
  age: '',
  weight: '',
  registNo: '',
  testType: '',
  testTypeExtend: '',
  allergy: '',
  allergyMedicine: '',
  usingMedicine: '',
  dependenceMedicine: '',
})
</script>

<template>
  <div class="page comfort-cure-preoperative-record">
    <div text="center 2xl" p-b-8>
      肥城市人民医院舒适化诊疗术前访视记录单
    </div>
    <el-form :model="model" label-suffix="：" label-width="90">
      <el-row :gutter="10">
        <el-col :span="4">
          <el-form-item label="姓名" label-width="60">
            <el-input v-model="model.name" />
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="性别" label-width="60">
            <el-radio-group v-model="model.gender">
              <el-radio v-for="item of ['男', '女']" :key="item" :label="item">
                {{ item }}
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="年龄" label-width="60">
            <el-input v-model="model.age">
              <template #append>
                岁
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="体重" label-width="60">
            <el-input v-model="model.weight">
              <template #append>
                kg
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="住院号" label-width="70">
            <el-input v-model="model.registNo" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="检查类型">
        <el-radio-group v-model="model.testType">
          <el-radio v-for="item of ['胃镜', '肠镜', '膀胱镜', '人流', '宫腔镜', '取卵', '气管镜', '其他']" :key="item" :label="item">
            {{ item }}
            <el-input v-if="['气管镜', '其他'].includes(item) && model.testType === item" v-model="model.testTypeExtend" />
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="过敏史">
            <el-radio-group v-model="model.allergy">
              <el-radio label="无">
                无
              </el-radio>
              <el-radio label="药物">
                药物
                <el-input v-if="model.allergy === '药物'" v-model="model.allergyMedicine" />
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="现在用药">
            <el-radio-group v-model="model.usingMedicine">
              <el-radio v-for="item of ['是', '否']" :key="item" :label="item">
                {{ item }}
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="药物依赖">
            <el-radio-group v-model="model.dependenceMedicine">
              <el-radio v-for="item of ['是', '否']" :key="item" :label="item">
                {{ item }}
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

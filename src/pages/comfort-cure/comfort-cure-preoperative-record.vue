<script lang="ts" setup>
import { Dict, type IModelType, Symptom } from '~/composables/preoperative'
import { stopEventDispath } from '~/composables'

const model = $ref<IModelType>({
  name: '',
  gender: [],
  age: '',
  weight: '',
  registNo: '',
  testType: [],
  testTypeExtend: '',
  testTypeWindpipeExtend: '',
  allergy: [],
  allergyMedicine: '',
  usingMedicine: [],
  dependenceMedicine: [],
  CVD: [],
  IDH: '',
  EH: '',
  breath: [],
  digestion: [],
  digestionExtend: '',
  internalSecretion: [],
  internalSecretionExtend: '',
  ECG: [],
  ECGExtend: '',
  usedMedicine: [],
  usedMedicineExtend: '',
  breathPassage: [],
  breathPassageExtend: '',
  ASA: [],
  bodyOrientation: [],
  bodyOrientationExtend: '',
  opinion: '',
  testResult: '',
})

const roter = useRouter()

const onClickLeft = () => roter.back()

// 检测类型改变
function onTestTypeChange(values: string[]) {
  if (model.testTypeWindpipeExtend && !values.includes('气管镜'))
    model.testTypeWindpipeExtend = ''
  if (model.testTypeExtend && !values.includes('其他'))
    model.testTypeExtend = ''
}

// 过敏史发生变化
function allergyChange([lastValue]: string[]) {
  if (lastValue !== '药物') {
    model.allergyMedicine = ''
    model.usedMedicine = []
    model.dependenceMedicine = []
  }
}

// 心脏疾病数据发生改变
function onCVDTypeChange(values: string[]) {
  if (!values.includes('高血压')) {
    model.IDH = ''
    model.EH = ''
  }
}

function onDigestionChange(val: string[]) {
  if (model.digestionExtend && !val.includes('其他'))
    model.digestionExtend = ''
}

function onInternalSecretionChange(val: string[]) {
  if (model.internalSecretionExtend && !val.includes('其他'))
    model.internalSecretionExtend = ''
}

function onECGChange(val: string[]) {
  if (model.ECGExtend && !val.includes('异常'))
    model.ECGExtend = ''
}

function onUsedMedicineChange(val: string[]) {
  if (model.usedMedicineExtend && !val.includes('其他'))
    model.usedMedicineExtend = ''
}

function onBreathPassageChange(val: string[]) {
  if (model.breathPassageExtend && !val.includes('其他'))
    model.breathPassageExtend = ''
}

function onBodyOrientationChange([lastValue]: string[]) {
  if (lastValue !== '其他')
    model.bodyOrientationExtend = ''
}
</script>

<template>
  <div class="page comfort-cure-preoperative-record">
    <van-nav-bar title="肥城市人民医院舒适化诊疗术前访视记录单" fixed left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form p-t-4 colon class="record-form--md" label-width="4.5em">
      <van-cell-group :border="false">
        <van-row gutter="8">
          <van-col span="4">
            <van-field v-model="model.name" name="name" label="姓名" label-width="2.5em" :border="false" />
          </van-col>
          <van-col span="6">
            <van-field name="gender" label="性别" :border="false" label-width="2.5em">
              <template #input>
                <CheckboxGroup v-model="model.gender" :max="1" :options="Dict.Gender" min-width="40px" />
              </template>
            </van-field>
          </van-col>
          <van-col span="4">
            <van-field
              v-model="model.age" label="年龄" label-width="2.5em" type="digit" input-align="center"
              :border="false" autocomplete="off"
            >
              <template #extra>
                岁
              </template>
            </van-field>
          </van-col>
          <van-col span="4">
            <van-field
              v-model="model.weight" label="体重" label-width="2.5em" type="digit" input-align="center"
              :border="false" autocomplete="off"
            >
              <template #extra>
                kg
              </template>
            </van-field>
          </van-col>
          <van-col span="6">
            <van-field v-model="model.registNo" name="registNo" label="住院号" label-width="3.5em" :border="false" />
          </van-col>
        </van-row>
        <van-field name="testType" label="检查类型" :border="false">
          <template #input>
            <CheckboxGroup v-model="model.testType" :options="Symptom.Test" @update:model-value="onTestTypeChange">
              <template #default="{ value }">
                <template v-if="!['气管镜', '其他'].includes(value)">
                  {{ value }}
                </template>
                <template v-else>
                  <div class="radio-label">
                    {{ value }}
                  </div>
                  <van-field
                    v-if="value === '气管镜'" key="气管镜" v-model="model.testTypeWindpipeExtend"
                    class="radio-label-input" :border="false" :readonly="!model.testType.includes('气管镜')"
                    @click-input="stopEventDispath"
                  />
                  <van-field
                    v-if="value === '其他'" key="其他" v-model="model.testTypeExtend" class="radio-label-input"
                    :border="false" :readonly="!model.testType.includes('其他')" @click-input="stopEventDispath"
                  />
                </template>
              </template>
            </CheckboxGroup>
          </template>
        </van-field>
        <van-row>
          <van-col span="12">
            <van-field name="allergy" label="过敏史" :border="false">
              <template #input>
                <CheckboxGroup
                  v-model="model.allergy" :options="Dict.Medicine" :max="1"
                  @update:model-value="allergyChange"
                >
                  <template #default="{ value }">
                    <div class="radio-label">
                      {{ value }}
                    </div>
                    <van-field
                      v-if="value === '药物'" v-model="model.allergyMedicine" class="radio-label-input"
                      :readonly="!model.allergy.includes('药物')" :border="false" @click-input="stopEventDispath"
                    />
                  </template>
                </CheckboxGroup>
              </template>
            </van-field>
          </van-col>
          <van-col span="6">
            <van-field v-if="model.allergy.includes('药物')" name="usingMedicine" label="现在用药" :border="false">
              <template #input>
                <CheckboxGroup v-model="model.usingMedicine" :options="Dict.YesNo" :max="1" min-width="40px" />
              </template>
            </van-field>
          </van-col>
          <van-col span="6">
            <van-field v-if="model.allergy.includes('药物')" name="dependenceMedicine" label="药物依赖" :border="false">
              <template #input>
                <CheckboxGroup v-model="model.dependenceMedicine" :options="Dict.YesNo" :max="1" min-width="40px" />
              </template>
            </van-field>
          </van-col>
        </van-row>
        <van-field name="CVD" label="心血管" :border="false">
          <template #input>
            <CheckboxGroup v-model="model.CVD" :options="Symptom.CVD" @update:model-value="onCVDTypeChange">
              <template #default="{ value }">
                <template v-if="value !== '高血压'">
                  {{ value }}
                </template>
                <template v-else>
                  <div class="radio-label">
                    {{ value }}
                  </div>
                  <div key="EH">
                    <van-field
                      v-model="model.EH" class="radio-label-input radio-label-input--eh" :border="false"
                      :readonly="!model.CVD.includes('高血压')" input-align="center" autocomplete="off" type="digit"
                      @click-input="stopEventDispath"
                    >
                      <template #extra>
                        /
                      </template>
                    </van-field>
                  </div>
                  <div key="IDH">
                    <van-field
                      v-model="model.IDH" class="radio-label-input radio-label-input--idh" :border="false"
                      :readonly="!model.CVD.includes('高血压')" input-align="center" autocomplete="off" type="digit"
                      @click-input="stopEventDispath"
                    >
                      <template #extra>
                        mmHg
                      </template>
                    </van-field>
                  </div>
                </template>
              </template>
            </CheckboxGroup>
          </template>
        </van-field>
        <van-field name="breath" label="呼吸" :border="false">
          <template #input>
            <CheckboxGroup v-model="model.breath" :options="Symptom.Breath" />
          </template>
        </van-field>
        <van-field name="digestion" label="消化" :border="false">
          <template #input>
            <CheckboxGroup
              v-model="model.digestion" :options="Symptom.Digestion"
              @update:model-value="onDigestionChange"
            >
              <template #default="{ value }">
                <template v-if="'其他' !== value">
                  {{ value }}
                </template>
                <template v-else>
                  <div class="radio-label">
                    {{ value }}
                  </div>
                  <div>
                    <van-field
                      v-model="model.digestionExtend" class="radio-label-input" :border="false"
                      :readonly="!model.digestion.includes('其他')" @click-input="stopEventDispath"
                    />
                  </div>
                </template>
              </template>
            </CheckboxGroup>
          </template>
        </van-field>
        <van-field name="internalSecretion" label="内分泌" :border="false">
          <template #input>
            <CheckboxGroup
              v-model="model.internalSecretion" :options="Symptom.InternalSecretion"
              @update:model-value="onInternalSecretionChange"
            >
              <template #default="{ value }">
                <template v-if="'其他' !== value">
                  {{ value }}
                </template>
                <template v-else>
                  <div class="radio-label">
                    {{ value }}
                  </div>
                  <div>
                    <van-field
                      v-model="model.internalSecretionExtend" class="radio-label-input" :border="false"
                      :readonly="!model.internalSecretion.includes('其他')" @click-input="stopEventDispath"
                    />
                  </div>
                </template>
              </template>
            </CheckboxGroup>
          </template>
        </van-field>
        <van-field name="ecg" label="心电图" :border="false">
          <template #input>
            <CheckboxGroup v-model="model.ECG" :options="Symptom.ECG" :max="1" @update:model-value="onECGChange">
              <template #default="{ value }">
                <template v-if="'异常' !== value">
                  {{ value }}
                </template>
                <template v-else>
                  <div class="radio-label">
                    {{ value }}
                  </div>
                  <div>
                    <van-field
                      v-model="model.ECGExtend" class="radio-label-input" :border="false"
                      :readonly="!model.ECG.includes('异常')" @click-input="stopEventDispath"
                    />
                  </div>
                </template>
              </template>
            </CheckboxGroup>
          </template>
        </van-field>
        <van-field name="usedMedicine" label="术前用药史" :border="false" label-width="75px">
          <template #input>
            <CheckboxGroup
              v-model="model.usedMedicine" :options="Symptom.UsedMedicine"
              @update:model-value="onUsedMedicineChange"
            >
              <template #default="{ value }">
                <template v-if="'其他' !== value">
                  {{ value }}
                </template>
                <template v-else>
                  <div class="radio-label">
                    {{ value }}
                  </div>
                  <div>
                    <van-field
                      v-model="model.usedMedicineExtend" class="radio-label-input" :border="false"
                      :readonly="!model.usedMedicine.includes('其他')" @click-input="stopEventDispath"
                    />
                  </div>
                </template>
              </template>
            </CheckboxGroup>
          </template>
        </van-field>
        <van-field name="breathPassage" label="气道评估" :border="false">
          <template #input>
            <CheckboxGroup
              v-model="model.breathPassage" :options="Symptom.BreathPassage" unique-value="未见异常"
              @update:model-value="onBreathPassageChange"
            >
              <template #default="{ value }">
                <template v-if="'其他' !== value">
                  {{ value }}
                </template>
                <template v-else>
                  <div class="radio-label">
                    {{ value }}
                  </div>
                  <div>
                    <van-field
                      v-model="model.breathPassageExtend" class="radio-label-input" :border="false"
                      :readonly="!model.breathPassage.includes('其他')" @click-input="stopEventDispath"
                    />
                  </div>
                </template>
              </template>
            </CheckboxGroup>
          </template>
        </van-field>
        <van-field name="ASA" label="ASA分级" :border="false">
          <template #input>
            <CheckboxGroup v-model="model.ASA" :options="Dict.ASA" :max="1" />
          </template>
        </van-field>
        <van-field name="bodyOrientation" label="体位" :border="false">
          <template #input>
            <CheckboxGroup
              v-model="model.bodyOrientation" :options="Dict.BodyOrientation" :max="1"
              @update:model-value="onBodyOrientationChange"
            >
              <template #default="{ value }">
                <div class="radio-label">
                  {{ value }}
                </div>
                <van-field
                  v-if="value === '其他'" v-model="model.bodyOrientationExtend" class="radio-label-input"
                  :readonly="!model.bodyOrientation.includes('其他')" :border="false" @click-input="stopEventDispath"
                />
              </template>
            </CheckboxGroup>
          </template>
        </van-field>
        <van-field
          v-model="model.opinion" name="opinion" type="textarea" autosize label="会诊意见" label-align="top"
          :border="false"
        />
        <van-field v-model="model.testResult" name="testResult" label="化验检查" label-align="top" :border="false">
          <template #input>
            <van-image src="/images/test-data.jpg" alt="化验检查结果" />
          </template>
        </van-field>
      </van-cell-group>
    </van-form>
  </div>
</template>

<style scoped>
.radio-label {
  display: inline-flex;
  align-items: center;
}

.radio-label-input {
  padding-left: 0.5rem !important;
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
  flex: 1;
}

.radio-label-input.radio-label-input--eh {
  padding-right: 0;
  width: 60px;
}

.radio-label-input.radio-label-input--idh {
  width: 110px;
}
</style>

export const Dict = {
  Gender: ['男', '女'],
  YesNo: ['否', '是'],
  Medicine: ['否', '药物'],
  BodyOrientation: ['截石位', '侧卧位', '仰卧位', '其他'],
  ASA: ['I', 'II', 'III', 'IV', 'V', 'VI', 'E'],
}

export const Symptom = {
  /** 检测类型 */
  Test: ['胃镜', '肠镜', '膀胱镜', '人流', '宫腔镜', '取卵', '气管镜', '其他'],
  /** 心血管疾病 */
  CVD: ['无', '心梗/心绞痛', '高血压', '心率失常', '心瓣膜病'],
  /** 呼吸障碍 */
  Breath: ['无', '上感', '咳嗽', '咳痰', '哮喘', '慢支', '肺气肿', '肺心病'],
  /** 消化障碍 */
  Digestion: ['无', '腹水', '肝硬化', '呼吸道出血', '其他'],
  /** 内分泌疾病 */
  InternalSecretion: ['无', '糖尿病', '甲亢/低', '肾上腺疾病', '其他'],
  /** 神经疾病 */
  Neuro: ['无', '脑中风', '瘫痪', '癫痫', '精神分裂症', '抑郁症', '躁狂症', '癔症', '其他'],
  /** 心电图 */
  ECG: ['正常', '异常'],
  UsedMedicine: ['无', '降压药', '降糖药', '抗凝药', '化疗药', '镇静药', '镇痛药', '其他'],
  /** 气道异常 */
  BreathPassage: ['未见异常', '张口差', '颈短', '头后仰受限', '小下颌', '其他'],
}

export interface IModelType {
  name: string
  gender: string[]
  age: string
  weight: string
  registNo: string
  testType: string[]
  testTypeExtend: string
  testTypeWindpipeExtend: string
  allergy: string[]
  allergyMedicine: string
  usingMedicine: string[]
  dependenceMedicine: string[]
  /** 心血管疾病 */
  CVD: string[]
  /** 低血压 */
  IDH: string
  /** 高血压 */
  EH: string
  /** 呼吸疾病 */
  breath: string[]
  /** 消化疾病 */
  digestion: string[]
  digestionExtend: string
  internalSecretion: string[]
  internalSecretionExtend: string
  /** 心电图 */
  ECG: string[]
  ECGExtend: string
  /** 术前用药 */
  usedMedicine: string[]
  usedMedicineExtend: string
  breathPassage: string[]
  breathPassageExtend: string
  ASA: string[]
  /** 体位 */
  bodyOrientation: string[]
  bodyOrientationExtend: string
  /** 会诊意见 */
  opinion: string
  /** 化验检查结果 */
  testResult: string
}

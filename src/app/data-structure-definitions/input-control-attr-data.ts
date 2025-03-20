//what kind of Labels we have
// and what kind of data we handle in the input controls
export type LabelsType = 'email' | 'password';
export interface InputControlAttrData {
  label: LabelsType;
  type: string;
  placeholder: string;
  isRequired: boolean;
  checkEmail: boolean;
  value?: string;
}

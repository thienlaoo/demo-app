import { MyformData } from "../types/MyformData";

interface UpdateMyformDataAction {
  type: 'UPDATE_FORM_DATA';
  payload: MyformData;
}

const initialState = {
  MyformData: {
    keywords: '',
    keyword_char_name: '',
    keyword_char_status: '',
    keyword_char_spec: '',
    keyword_char_type: '',
    keyword_char_gender: '',
    keyword_loc_name: '',
    keyword_loc_type: '',
    keyword_loc_dimention: '',
    keyword_epi_name: '',
    keyword_epi_epi: '',
  }
};

export const formReducer = (state = initialState, action: UpdateMyformDataAction) => {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return {
        updatedData: action.payload,
      };
    default:
      return null;
  }
};

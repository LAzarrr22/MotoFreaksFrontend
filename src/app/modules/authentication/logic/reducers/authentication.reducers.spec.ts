import {AuthenticationState, reducer} from "./authentication.reducers";
import {RolesEnum} from "../enums/roles.enum";
import {UserLoginSuccess} from "../actions/authentication.actions";
import {LoginSuccessfulDto} from "../dto/response/login-successful.model";


describe('AuthReducer', ()=>{

  it('loginUser', ()=>{

    const initialState: AuthenticationState={
      token: null,
      loggedIn: false,
      isValidated:false,
      roles: null,
      loading: false
    }

    const expectedState: AuthenticationState={
      token: 'test-token',
      loggedIn: true,
      isValidated:true,
      roles: [RolesEnum.USER],
      loading: false
    }

    const action = new UserLoginSuccess(new LoginSuccessfulDto(
       'username',  true, 'test-token', [RolesEnum.USER]
    ))

    const output = reducer(initialState,action)

    expect(output).toEqual(expectedState);
  });

})

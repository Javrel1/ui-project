import React from 'react';
import style from './style.module.css';
import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';

const Input = React.forwardRef(function CustomInput(
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.ForwardedRef<HTMLDivElement>,
) {
    return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

const grey = {
    200: '#DAE2ED',
    300: '#C7D0DD',
    500: '#9DA8B7',
    700: '#434D5B',
    900: '#1C2025',
};

const InputElement = styled('input')(
    ({ theme }) => `
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
        theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };

  &:hover {
    border-color: ${grey[500]};
  }

  &:focus {
    border-color: ${grey[500]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);
export function SignInPage(){
    return(
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.title}>
                    <a>Welcome Back!</a>
                </div>
                <div className={style.forms}>
                    <div className={style.form}>
                        <a>Email</a>
                        <Input placeholder={'Email'} className={style.text} type="email"/>
                    </div>
                    <div className={style.form}>
                        <a>Password</a>
                        <Input placeholder={'Password'} className={style.text} type="password"/>
                    </div>
                </div>
                <div className={style.other}>
                    <div className={style.centerElements}>
                        <div className={style.remember}>
                            <input type="checkbox"/>
                        </div>
                        <div className={style.forgot}>
                            <a>Forgot Password?</a>
                        </div>
                    </div>
                    <div className={style.signInButton}>
                        <button>Sign In</button>
                    </div>
                    <div className={style.newAcc}>
                        <a>Create a new account</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
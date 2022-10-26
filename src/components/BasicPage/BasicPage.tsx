import React, {FC, ReactNode} from 'react';
import cl from "./BasicPage.module.scss";
import classNames from "classnames";

interface IBasicPage {
  className?: string;
  children?: ReactNode;
}

const BasicPage: FC<IBasicPage> = ({className, children}) => {
    return (
        <div className={classNames(className!, cl.basicPage)}>
          {children}
        </div>
    );
};

export default BasicPage;
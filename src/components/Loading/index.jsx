import React from 'react';
import { Spin } from 'antd';

import './index.scss';

const Loading = () => {
    return (
        <div className="loading-container"><Spin /></div>
    )
}

export default Loading;
import React from 'react';
import HakeSirkelIkon from 'ffe-icons-react/lib/hake-sirkel-ikon';

import SystemMessage from './SystemMessage';

export default function SystemSuccessMessage(props) {
    return (
        <SystemMessage
            modifier="success"
            icon={<HakeSirkelIkon />}
            {...props}
        />
    );
}
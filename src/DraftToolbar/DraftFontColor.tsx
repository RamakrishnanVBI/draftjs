import { AdvancedColorPicker } from '@visualbi/bifrost-ui/dist/react/forms/AdvancedColorPicker';
import React, { useRef } from 'react';
import { IDraftToolbarProps } from './DraftToolbar';

interface IDraftFontColorProps {
    formatProps: IDraftToolbarProps;
}

const DraftFontColor = (props: IDraftFontColorProps) => {
    const {
        formatProps: { setFormat, currentFormat },
    } = props;
    const draftFontColorRef = useRef(null);

    const onChange = (values: string) => {
        setFormat('color', values);
    };

    return (
        <AdvancedColorPicker
            ref={draftFontColorRef}
            // className={` fontColorIcon`}
            isCompositeButton
            isSVGIcon
            icon={'ms-Icon ms-Icon--FontColorA'}
            showIconDropDown
            defaultColor={'#000000'}
            value={currentFormat?.color}
            // recentColors={recentColors}
            onChange={onChange}
            hasNoFill={false}
        />
    );
};

export default DraftFontColor;
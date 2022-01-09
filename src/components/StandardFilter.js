import React from 'react'
import LocalOfferIcon from '@material-ui/icons/LocalOfferOutlined';
import { FilterList, FilterListItem } from 'react-admin';



const StandardFilter = () => {
    return (
    <FilterList label="Standard" icon={<LocalOfferIcon />} >
        <FilterListItem label="KG" value={{ std: 'KG' }} />
        <FilterListItem label="1" value={{ std : '1st' }} />
        <FilterListItem label="2" value={{ std: '2nd' }} />
        <FilterListItem label="3" value={{ std: '3rd' }} />
        <FilterListItem label="4" value={{ std: '4th' }} />
        <FilterListItem label="5" value={{ std: '5th' }} />
        <FilterListItem label="6" value={{ std: '6th' }} />
        <FilterListItem label="7" value={{ std: '7th' }} />
        <FilterListItem label="8" value={{ std: '8th' }} />
        <FilterListItem label="9" value={{ std: '9th' }} />
        <FilterListItem label="10" value={{ std: '10th' }} />
    </FilterList>
    )
}

export default StandardFilter

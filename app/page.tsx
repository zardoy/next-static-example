import messageIcon from '@iconify-icons/mdi/message'
import starIcon from '@iconify-icons/mdi/star'
import { IndexButton } from './IndexButton'
import MenuContentWrap from './components/MenuContentWrap'
import Translated from './Translated'

export default () => {
    return (
        <MenuContentWrap>
            <IndexButton icon={starIcon} href="bookmarks">
                Bookmarks
            </IndexButton>
            <IndexButton icon={messageIcon} href="messages">
                <Translated>test</Translated>
            </IndexButton>
        </MenuContentWrap>
    )
}

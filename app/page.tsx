import messageIcon from '@iconify-icons/mdi/message'
import starIcon from '@iconify-icons/mdi/star'
import { IndexButton } from './IndexButton'
import MenuContentWrap from './components/MenuContentWrap'
import { useTranslation } from './i18n'

export default async () => {
    const { t } = await useTranslation()

    return (
        <MenuContentWrap>
            <IndexButton icon={starIcon} href="bookmarks">
                {t('Bookmarks')}
            </IndexButton>
            <IndexButton icon={messageIcon} href="messages">
                {t('Messages')}
            </IndexButton>
        </MenuContentWrap>
    )
}

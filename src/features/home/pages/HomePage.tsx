import LayoutRoot from '@/components/layout/LayoutRoot'
import { changeLanguage } from '@/locales/i18n'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
    const { t } = useTranslation('translation')

    return (
        <LayoutRoot>
            <div className='text-red-600'>Home Page</div>
            <Button type='primary'>Primary Button</Button>
            <Button>Default Button</Button>
            <Button type='dashed'>Dashed Button</Button>
            <Button type='text'>Text Button</Button>
            <Button type='link'>Link Button</Button>
            <div>
                <h1>{t('title')}</h1>
                <select onChange={changeLanguage}>
                    <option value='eng'>English</option>
                    <option value='vie'>Vietnamese</option>
                </select>
            </div>
        </LayoutRoot>
    )
}

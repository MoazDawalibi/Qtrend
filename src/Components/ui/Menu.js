import Link from "next/link";

export default function MenuService({handleMouseLeave, t}) {
    
    return (
        <>
         <div className="drop-service"  onMouseLeave={()=>handleMouseLeave()}>
        <div className="drop-service-image">.</div>
        <ul className="dropdown-menu">
                <li  href={'/services?param=1'} ><p></p><Link  href={'/services?param=1'} >{t('CREATIVE')} {t('DESIGNS')}</Link></li>
                <li href={'/services?param=2'}><p></p><Link href={'/services?param=2'}>{t('DIGITAL')} {t('MARKETING')}</Link></li>
                <li href={'/services?param=3'}><p></p><Link href={'/services?param=3'}>{t('PHOTOS')} {t('&VIDEOS')}</Link></li>
                <li href={'/services?param=4'}><p></p><Link href={'/services?param=4'}>{t('MODELING')} {t('SERVICES')}</Link></li>
                <li href={'/FifthService'}> <p></p> <Link href={'/FifthService'}>{t('APPS & WEB')} {t('DEVELOPMENT')}</Link></li>
                <li href={'/drag'}><p></p><Link href={'/drag'}>{t('BLOGGERS')} {t('SERVICES')}</Link></li>
            </ul>
        </div>
                
              
                

          
        </>
    )
}
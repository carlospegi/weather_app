import React from 'react'
import styles from './WeatherMainInfo.module.css'
export default function WeatherMainInfo({ weather }) {
    return (
        <div className={styles.mainInfo}>
            <div className={styles.city} >{weather?.location.name}</div>
            <div className={styles.country} >{weather?.location.country}</div>
            <div className={styles.row}  >
                <div >
                    <div>
                        <img src={`http:${weather?.current.condition.icon}`} width="128" alt="icon weather"></img>
                    </div>
                </div>
                <div>
                <div className={styles.condition}  >{weather?.current.condition.text}</div>
                <div className={styles.current} >{weather?.current.temp_c}°C</div>
                </div>
            </div>
            <iframe title='mapa'
                /* src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1250837.5849915408!2d-1.7127684296875056!3d52.242617902728966!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1661819698430!5m2!1ses!2sco" */
                src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1250837.5849915408!2d${weather?.location.lon}56!3d${weather?.location.lat}6!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1661819698430!5m2!1ses!2sco`}
                width="400"
                height="200"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">

            </iframe>
        </div>
    )
}

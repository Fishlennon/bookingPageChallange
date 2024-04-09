import styles from './reserved.module.css'

const Reserved = (props) => {



    
    return(
        <div>
            <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" 
            alt="" 
            style={{ maxWidth: '100%', height: 'auto' }}/>
            <div className={styles.buttonContainer}>
                <button  className={styles.navButton} onClick={props.reset}>inicio</button>
            </div>
        </div>
    )
}

export default Reserved
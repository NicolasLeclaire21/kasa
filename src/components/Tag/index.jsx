import './tag.scss'

function Tag ({tag}) {
    return (
        <div className='tag'>
            <p className='tag__texte'>{tag}</p>
        </div>
    )
}

export default Tag
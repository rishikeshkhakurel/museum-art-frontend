import React from 'react'
import styled from 'styled-components'
import useAddArtWork from '../hooks/useAddArtWork'
import Button from '../../../component/button'
import Input from '../../../component/input'

const AddUserStyled = styled.div`
height: 100%;
    h1{
        color: var(--gray-500);
    }

    #add-art-form{
        background: var(--white);
        height: calc(100% - 120px);
        padding: 32px;
        margin: 16px 0;
        border-radius: 8px;   

        form{
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-gap: 0 32px;

        }
    }
`

function AddArtWork() {
    const { formik } = useAddArtWork();
    return (
        <AddUserStyled>
            <h1>Add ArtWork</h1>

            <div id='add-art-form'>
                <form onSubmit={formik.handleSubmit}>
                    <Input
                        placeholder="Art Work Title"
                        name="Title"
                        id="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.title && formik.errors.title}
                    />
                    <Input
                        placeholder="Artist"
                        name="Artist"
                        id="artist"
                        value={formik.values.artist}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.artist && formik.errors.artist}
                    />
                    <Input
                        placeholder="URl"
                        name="URl"
                        id="url"
                        value={formik.values.url}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.url && formik.errors.url}
                    />
                    <Input
                        placeholder="Thumbnail"
                        name="Thumbnail"
                        id="thumbnail"
                        value={formik.values.thumbnail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.thumbnail && formik.errors.thumbnail}
                    />
                    <Input
                        placeholder="Nationality"
                        name="Nationality"
                        id="nationality"
                        value={formik.values.nationality}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.nationality && formik.errors.nationality}
                    />
                    <Input
                        placeholder="Date"
                        name="Date"
                        id="date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.date && formik.errors.date}
                    />
                    
                    <div>
                        <Button color='primary' type='submit'>
                            Add ArtWork
                        </Button>
                    </div>
                </form>
            </div>
        </AddUserStyled>
    )
}

export default AddArtWork
import React from 'react'
import styled from 'styled-components'
import useAddArtist from '../hooks/useAddArtist'
import Button from '../../../component/button'
import Input from '../../../component/input'
import Select from '../../../component/select'
import AlertBox from '../../../component/alert-box'
import Loading from '../../../component/Loading'

const AddArtistStyled = styled.div`
height: 100%;
    h1{
        color: var(--gray-500);
    }

    #add-artist{
        background: var(--white);
        height: calc(100% - 120px);
        position: relative;
        padding: 32px;
        margin: 16px 0;
        border-radius: 8px;   

        form{
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-gap: 0 32px;
            button{
                cursor: pointer;
            }
        }
    }
`

function AddArtist() {
    const { formik, addArtistRes, edit, editArtistRes } = useAddArtist();
    
    return (
        <AddArtistStyled>
            {addArtistRes?.isSuccess && <AlertBox AlertMessage="Artist Added Successfully" />}
            {(addArtistRes?.isError || editArtistRes?.isError) && <AlertBox isError AlertMessage="Something Went Wrong" />}
            {editArtistRes?.isSuccess && <AlertBox AlertMessage="Artist Edited Successfully" />}
            <h1>{edit ? 'Edit' : 'Add'} Artist</h1>
            <div id='add-artist'>
                <Loading />
                <form onSubmit={formik.handleSubmit}>
                    <Input
                        placeholder="Robert Arneson	"
                        name="Display Name"
                        id="displayName"
                        value={formik.values.displayName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.displayName && formik.errors.displayName}
                    />
                    <Input
                        placeholder="American, 1930–1992"
                        name="Artist Bio"
                        id="artistBio"
                        value={formik.values.artistBio}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.artistBio && formik.errors.artistBio}
                    />
                    <Input
                        placeholder="American"
                        name="Nationality"
                        id="nationality"
                        value={formik.values.nationality}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.nationality && formik.errors.nationality}
                    />
                    <Select
                        name="Gender"
                        id="gender"
                        options={['Male', 'Female', 'Other']}
                        onChange={(selectedValue) => {
                            formik.handleChange('gender')(selectedValue);
                        }}
                        onBlur={formik.handleBlur}
                        error={formik.touched.gender && formik.errors.gender} />
                    <Input
                        placeholder="1930"
                        name="Begin Year"
                        id="beginDate"
                        value={formik.values.beginDate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.beginDate && formik.errors.beginDate}
                    />
                    <Input
                        placeholder="1992"
                        name="End Year"
                        id="endDate"
                        value={formik.values.endDate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.endDate && formik.errors.endDate}
                    />

                    <div>
                        <Button color='primary' type='submit'>
                            {edit ? 'Edit' : 'Add'} Artist
                        </Button>
                    </div>
                </form>
            </div>
        </AddArtistStyled>
    )
}

export default AddArtist
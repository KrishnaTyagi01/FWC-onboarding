import React, { useState, useEffect } from 'react';
import {
  Container,
  HeroContainer,
  MainHeader,
  //  MainPara, CardHeader, CardPara
} from '../formpage.styles.js';
// import { Link } from 'react-router-dom';
import FormPageComponent from '../../../components/form/FormPageComponent';
import OPBreadCrumb from '../../../components/form/OPBreadCrumb';
import axios from 'axios';
import { toast } from '../../../util/ToastUtil.js';
import { config } from '../../../util/RequestUtil';
import { OPLoader } from '../../../util/LoaderUtil.js';
import FwcHeader from '../../../components/header/FwcHeader.js';

const Uploads = ({ history }) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios.get('/api/employee?select=uploads', config);

      setFormData({ ...result.data.data.uploads });
      setIsLoading(false);
    };

    fetchData();
  }, []);
  const onFileChange = async (e) => {
    const { files, name } = e.target;
    const file = files[0];
    const inputFormData = new FormData();
    inputFormData.append('file', file);
    const res = await axios.post(
      '/api/file/upload-url',
      {
        fileName: file.name,
        fileType: 'doc',
        fileExtension: 'pdf',
      },
      config
    );
    const { fileKey, url } = res.data;
    const res2 = await axios.put(url, inputFormData); // AWS PUT
    if (res2.status === 200) {
      const tempFormData = { ...formData, [name]: fileKey };
      console.log(tempFormData);
      setFormData({ ...tempFormData });
      console.log('Uploaded successfully');
      toast(`File uploaded successfully`);
    }
  };
  return (
    <Container>
      <FwcHeader pathname='/other' />

      <HeroContainer className='box d-flex align-items-center justify-content-center'>
        <MainHeader className='text-center'>
          Uploads and Other Information
        </MainHeader>
      </HeroContainer>
      <div className=''>
        <OPLoader isLoading={isLoading} />
        <FormPageComponent>
          <div className='container-fluid mt-5'>
            {/* <h2>Current Address</h2> */}
            <OPBreadCrumb
              crumbs={[
                {
                  link: '/information/otherInformation',
                  label: 'Other Information',
                },
                {
                  link: '/information/uploads',
                  label: 'Uploading Documents',
                },
              ]}
              activeIndex={1}
            />
            <hr></hr>
            <form className='mt-2 '>
              <p>Files once uploaded, need not be uploaded again</p>
              <div className='form-row p-2'>
                <div className='col-sm-12 col-lg-6 col-md-6 p-2'>
                  {[
                    {
                      label: 'Bio Data',
                      name: 'bioDataForm',
                    },
                    {
                      label: 'Joining Report / Company Application Form',
                      name: 'joiningReportU',
                    },
                    {
                      label: 'Mediclaim Declaration',
                      name: 'mediclaimDeclarationU',
                    },
                  ].map((form, i) => (
                    <div key={i} className='form-group p-3 row text-right'>
                      <label className='col-sm-7 col-form-label'>
                        <b>{form.label}&nbsp;:</b>
                      </label>
                      <label
                        style={{ textDecoration: 'underline' }}
                        className='col-sm-5 btn text-truncate text-left'>
                        <span className='' style={{ width: 50 }}>
                          {(() => {
                            const value = formData[form.name];
                            if (value !== undefined)
                              return `${value.split('/')[2]}`;
                            return undefined;
                          })() || 'Upload '}
                        </span>
                        <input
                          hidden
                          type='file'
                          name={form.name}
                          onChange={onFileChange}
                          className='form-control-file'
                          id='exampleFormControlFile1'
                          accept='application/pdf'
                        />
                      </label>
                    </div>
                  ))}
                </div>

                <div className='col-sm-12 col-lg-6 col-md-6 p-2'>
                  {[
                    {
                      label: 'PF Nomination Form',
                      name: 'pfNominationU',
                    },
                    {
                      label: 'ESI Nomination Form',
                      name: 'esiNominationU',
                    },
                    {
                      label: 'Gratuity Nomination Form',
                      name: 'gratuityNominationU',
                    },
                    // {
                    //   label: 'Other Document',
                    //   name: 'otherDocsU',
                    // },
                  ].map((form, i) => (
                    <div key={i} className='form-group p-3 text-right'>
                      <label className='col-sm-7'>
                        <b>{form.label}&nbsp;:</b>
                      </label>
                      <label
                        style={{ textDecoration: 'underline' }}
                        className='col-sm-5 btn text-truncate text-left'>
                        <span className='text-truncate'>
                          {(() => {
                            const value = formData[form.label];
                            if (value !== undefined) return value.split('/')[2];
                            return undefined;
                          })() || 'Upload'}
                        </span>
                        <input
                          hidden
                          type='file'
                          name={form.label}
                          onChange={onFileChange}
                          className='form-control-file'
                          id='exampleFormControlFile1'
                          accept='application/pdf'
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className='form-group row p-2 d-flex justify-content-center mt-4 mb-5'>
                <div className='col-sm-10'>
                  <div
                    className='btn selected-crumb submit-button crumb-item w-100 font-weight-bold'
                    onClick={async () => {
                      setIsLoading(true);
                      await axios.post(
                        '/api/employee',
                        {
                          postParams: {
                            uploads: formData,
                            TUploadInformation: true,
                          },
                        },
                        config
                      );
                      setIsLoading(false);
                      toast('Your application is complete');
                      history.push('/');
                    }}>
                    <i className='far fa-check-circle'></i> Save and Continue
                  </div>
                </div>
              </div>
            </form>
          </div>
        </FormPageComponent>
      </div>
    </Container>
  );
};

export default Uploads;

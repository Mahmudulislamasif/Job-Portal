import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AppliedJobs = () => {
    const [user]=useAuthState(auth)

    const { data, isLoading, refetch } = useQuery(['userapply', user?.email], () => fetch(`http://localhost:5000/userapply/${user?.email}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="bg-[#f7f7f7]">
            <div class="overflow-x-auto container mx-auto py-4 min-h-screen">
            <table class="table w-full">
              <thead  className="">
                <tr>
                  <th className="bg-cyan-400">Serial</th>
                  <th className="bg-cyan-400">Comapany</th>
                  <th className="bg-cyan-400">Profile</th>
                  <th className="bg-cyan-400">Applied On</th>
                  <th className="bg-cyan-400">Number of applicants</th>
                  <th  className="bg-cyan-400">Application status</th>
                </tr>
              </thead>
              <tbody>
              {
                data.data?.map((apply,index)=><tr key={apply.id}>
                            <th className="bg-slate-100">{index+1}</th>
                            <td className="bg-slate-100">{apply.companyname}</td>
                            <td className="bg-slate-100">{apply.subject}</td>
                            <td className="bg-slate-100"></td>
                            <td className="bg-slate-100"></td>
                          {
                            apply.status==="Ontouch" ? <td className="bg-slate-100 text-yellow-400 font-bold">{apply.status}</td>: apply.status==="Rejected" ? <td className="bg-slate-100 text-red-500 ">{apply.status}</td>:<td className="bg-slate-100 text-green-500">{apply.status}</td>
                          }
                            </tr>)
              }

              </tbody>
            </table>
          </div>
          </div>
        </div>
    );
};

export default AppliedJobs;
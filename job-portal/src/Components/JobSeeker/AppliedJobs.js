import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import useApplicants from '../../useHook/useApplicants';
import Loading from '../Shared/Loading';

const AppliedJobs = () => {
    const [user]=useAuthState(auth)
    const { data:userApply, isLoading, refetch } = useQuery(['userapply', user?.email], () => fetch(`http://localhost:5000/userapply/${user?.email}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
             <div class="overflow-x-auto p-3">
            <table class="table w-full">
              <thead  className="">
                <tr>
                  <th className="bg-cyan-400">Serial</th>
                  <th className="bg-cyan-400">Comapany</th>
                  <th className="bg-cyan-400">Profile</th>
                  <th className="bg-cyan-400">Applied On</th>
                  <th  className="bg-cyan-400">Application status</th>
                  <th className="bg-cyan-400">Messege</th>
                </tr>
              </thead>
              <tbody>
              {
                userApply.data?.map((apply,index)=><tr key={apply.id}>
                            <th className="bg-slate-100">{index+1}</th>
                            <td className="bg-slate-100">{apply.companyname}</td>
                            <td className="bg-slate-100">{apply.subject}</td>
                            <td className="bg-slate-100">{apply.date}</td>
                          {
                            apply.status==="Ontouch" ? <td className="bg-slate-100 text-green-400 font-bold">{apply.status}</td>: apply.status==="Rejected" ? <td className="bg-slate-100 text-red-500 ">{apply.status}</td>:<td className="bg-slate-100 text-green-500">{apply.status}</td>
                          }
                             <td className="bg-slate-100"><div class="tooltip" data-tip={apply.msg}>
                                <button class="btn btn-primary">Messege</button>
                              </div></td>
                            </tr>)
              }

              </tbody>
            </table>
          </div>
        </div>
    );
};

export default AppliedJobs;
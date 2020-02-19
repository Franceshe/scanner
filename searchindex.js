Search.setIndex({docnames:["api","api/scanner","api/scannerpy","api/scannertools","guide","guide/extensions","guide/from_source","guide/getting-started","guide/graphs","guide/installation","guide/kubernetes","guide/ops","guide/profiling","guide/quickstart","guide/stored-streams","guide/tutorial","guide/walkthrough","index","overview","publications","scannertools"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","api/scanner.rst","api/scannerpy.rst","api/scannertools.rst","guide.rst","guide/extensions.rst","guide/from_source.rst","guide/getting-started.rst","guide/graphs.rst","guide/installation.rst","guide/kubernetes.rst","guide/ops.rst","guide/profiling.rst","guide/quickstart.rst","guide/stored-streams.rst","guide/tutorial.rst","guide/walkthrough.rst","index.rst","overview.rst","publications.rst","scannertools.rst"],objects:{"scannerpy.client":{Client:[2,2,1,""],start_master:[2,0,1,""],start_worker:[2,0,1,""]},"scannerpy.client.Client":{batch_load:[2,3,1,""],bulk_fetch_video_metadata:[2,3,1,""],delete_table:[2,3,1,""],delete_tables:[2,3,1,""],get_active_jobs:[2,3,1,""],get_profile:[2,3,1,""],has_gpu:[2,3,1,""],has_table:[2,3,1,""],ingest_videos:[2,3,1,""],load_op:[2,3,1,""],new_table:[2,3,1,""],register_op:[2,3,1,""],register_python_kernel:[2,3,1,""],run:[2,3,1,""],sequence:[2,3,1,""],start_master:[2,3,1,""],start_workers:[2,3,1,""],stop_cluster:[2,3,1,""],summarize:[2,3,1,""],table:[2,3,1,""],wait_on_job:[2,3,1,""],wait_on_job_gen:[2,3,1,""]},"scannerpy.column":{Column:[2,2,1,""]},"scannerpy.column.Column":{id:[2,3,1,""],keyframes:[2,3,1,""],load:[2,3,1,""],name:[2,3,1,""],save_mp4:[2,3,1,""],type:[2,3,1,""]},"scannerpy.common":{CacheMode:[2,2,1,""],ColumnType:[2,2,1,""],CustomFormatter:[2,2,1,""],DeviceHandle:[2,2,1,""],DeviceType:[2,2,1,""],PerfParams:[12,2,1,""],ScannerException:[2,5,1,""]},"scannerpy.common.CacheMode":{Error:[2,4,1,""],Ignore:[2,4,1,""],Overwrite:[2,4,1,""]},"scannerpy.common.ColumnType":{Blob:[2,4,1,""],Video:[2,4,1,""],to_proto:[2,4,1,""]},"scannerpy.common.CustomFormatter":{format:[2,3,1,""]},"scannerpy.common.DeviceType":{CPU:[2,4,1,""],GPU:[2,4,1,""],to_proto:[2,4,1,""]},"scannerpy.common.PerfParams":{estimate:[2,3,1,""],manual:[2,3,1,""]},"scannerpy.config":{Config:[2,2,1,""],mkdir_p:[2,0,1,""],read_line:[2,0,1,""]},"scannerpy.config.Config":{default_config:[2,3,1,""],default_config_path:[2,3,1,""]},"scannerpy.io":{IOGenerator:[2,2,1,""]},"scannerpy.io.IOGenerator":{Input:[2,3,1,""],Output:[2,3,1,""]},"scannerpy.job":{Job:[2,2,1,""]},"scannerpy.job.Job":{op_args:[2,3,1,""]},"scannerpy.kernel":{Kernel:[2,2,1,""],KernelConfig:[2,2,1,""],python_kernel_fn:[2,0,1,""]},"scannerpy.kernel.Kernel":{close:[2,3,1,""],execute:[2,3,1,""],fetch_resources:[2,3,1,""],new_stream:[2,3,1,""],reset:[2,3,1,""],setup_with_resources:[2,3,1,""]},"scannerpy.kube":{CloudConfig:[2,2,1,""],Cluster:[2,2,1,""],ClusterConfig:[2,2,1,""],MachineConfig:[2,2,1,""],MachineType:[2,2,1,""],MachineTypeName:[2,2,1,""],MachineTypeQuantity:[2,2,1,""],master:[2,0,1,""],run:[2,0,1,""],worker:[2,0,1,""]},"scannerpy.kube.Cluster":{"delete":[2,3,1,""],cli:[2,3,1,""],client:[2,3,1,""],config:[2,3,1,""],create_object:[2,3,1,""],get_by_owner:[2,3,1,""],get_credentials:[2,3,1,""],get_kube_info:[2,3,1,""],get_object:[2,3,1,""],get_pod:[2,3,1,""],healthy:[2,3,1,""],job_status:[2,3,1,""],make_container:[2,3,1,""],make_deployment:[2,3,1,""],master_address:[2,3,1,""],master_logs:[2,3,1,""],monitor:[2,3,1,""],resize:[2,3,1,""],resource_metrics:[2,3,1,""],running:[2,3,1,""],start:[2,3,1,""],trace:[2,3,1,""],worker_logs:[2,3,1,""]},"scannerpy.kube.ClusterConfig":{price:[2,3,1,""]},"scannerpy.kube.MachineConfig":{price:[2,3,1,""]},"scannerpy.kube.MachineType":{get_cpu:[2,3,1,""],get_mem:[2,3,1,""],get_name:[2,3,1,""]},"scannerpy.kube.MachineTypeName":{get_cpu:[2,3,1,""],get_mem:[2,3,1,""],get_name:[2,3,1,""]},"scannerpy.kube.MachineTypeQuantity":{get_cpu:[2,3,1,""],get_mem:[2,3,1,""],get_name:[2,3,1,""]},"scannerpy.op":{Op:[2,2,1,""],OpColumn:[2,2,1,""],OpGenerator:[2,2,1,""],SliceList:[2,2,1,""],check_modules:[2,0,1,""],collect_per_stream_args:[2,0,1,""],register_module:[2,0,1,""],register_python_op:[2,0,1,""]},"scannerpy.op.Op":{inputs:[2,3,1,""],outputs:[2,3,1,""],to_proto:[2,3,1,""]},"scannerpy.op.OpColumn":{compress:[2,3,1,""],compress_default:[2,3,1,""],compress_video:[2,3,1,""],lossless:[2,3,1,""]},"scannerpy.partitioner":{TaskPartitioner:[2,2,1,""]},"scannerpy.partitioner.TaskPartitioner":{all:[2,3,1,""],gather:[2,3,1,""],range:[2,3,1,""],ranges:[2,3,1,""],strided:[2,3,1,""],strided_range:[2,3,1,""],strided_ranges:[2,3,1,""]},"scannerpy.profiler":{Profile:[2,2,1,""],read_advance:[2,0,1,""],unpack_string:[2,0,1,""]},"scannerpy.profiler.Profile":{statistics:[2,3,1,""],total_time_interval:[2,3,1,""],write_trace:[2,3,1,""]},"scannerpy.sampler":{Sampler:[2,2,1,""]},"scannerpy.sampler.Sampler":{All:[2,3,1,""],Gather:[2,3,1,""],Range:[2,3,1,""],Ranges:[2,3,1,""],Repeat:[2,3,1,""],RepeatNull:[2,3,1,""],Stride:[2,3,1,""],StridedRange:[2,3,1,""],StridedRanges:[2,3,1,""]},"scannerpy.sink":{Sink:[2,2,1,""],SinkGenerator:[2,2,1,""]},"scannerpy.sink.Sink":{inputs:[2,3,1,""],to_proto:[2,3,1,""]},"scannerpy.source":{Source:[2,2,1,""],SourceGenerator:[2,2,1,""]},"scannerpy.source.Source":{outputs:[2,3,1,""],to_proto:[2,3,1,""]},"scannerpy.storage":{NamedStorage:[2,2,1,""],NamedStream:[2,2,1,""],NamedVideoStorage:[2,2,1,""],NamedVideoStream:[2,2,1,""],NullElement:[2,2,1,""],StorageBackend:[2,2,1,""],StoredStream:[2,2,1,""]},"scannerpy.storage.NamedStorage":{"delete":[2,3,1,""],sink:[2,3,1,""],source:[2,3,1,""]},"scannerpy.storage.NamedStream":{committed:[2,3,1,""],exists:[2,3,1,""],len:[2,3,1,""],load_bytes:[2,3,1,""],name:[2,3,1,""],storage:[2,3,1,""],type:[2,3,1,""]},"scannerpy.storage.NamedVideoStorage":{ingest:[2,3,1,""],sink:[2,3,1,""],source:[2,3,1,""]},"scannerpy.storage.NamedVideoStream":{as_hwang:[2,3,1,""],committed:[2,3,1,""],estimate_size:[2,3,1,""],exists:[2,3,1,""],len:[2,3,1,""],load_bytes:[2,3,1,""],save_mp4:[2,3,1,""]},"scannerpy.storage.StorageBackend":{"delete":[2,3,1,""],sink:[2,3,1,""],source:[2,3,1,""]},"scannerpy.storage.StoredStream":{"delete":[2,3,1,""],committed:[2,3,1,""],estimate_size:[2,3,1,""],exists:[2,3,1,""],len:[2,3,1,""],load:[2,3,1,""],load_bytes:[2,3,1,""],name:[2,3,1,""],storage:[2,3,1,""],type:[2,3,1,""]},"scannerpy.streams":{StreamsGenerator:[2,2,1,""]},"scannerpy.streams.StreamsGenerator":{All:[2,3,1,""],Gather:[2,3,1,""],Range:[2,3,1,""],Ranges:[2,3,1,""],Repeat:[2,3,1,""],RepeatNull:[2,3,1,""],Slice:[2,3,1,""],Stride:[2,3,1,""],StridedRange:[2,3,1,""],StridedRanges:[2,3,1,""],Unslice:[2,3,1,""]},"scannerpy.types":{Bbox:[2,2,1,""],BboxList:[2,2,1,""],FrameType:[2,2,1,""],Histogram:[2,2,1,""],Image:[2,2,1,""],NumpyArrayFloat32:[2,2,1,""],NumpyArrayInt32:[2,2,1,""],ProtobufType:[2,0,1,""],ScannerTypeInfo:[2,2,1,""],UniformList:[2,0,1,""],VariableList:[2,0,1,""],get_type_info:[2,0,1,""],get_type_info_cpp:[2,0,1,""],register_type:[2,0,1,""]},"scannerpy.types.Bbox":{deserialize:[2,3,1,""],serialize:[2,3,1,""]},"scannerpy.types.BboxList":{deserialize:[2,3,1,""],serialize:[2,3,1,""]},"scannerpy.types.Histogram":{deserialize:[2,3,1,""],serialize:[2,3,1,""]},"scannerpy.types.Image":{deserialize:[2,3,1,""],serialize:[2,3,1,""]},"scannerpy.types.NumpyArrayFloat32":{deserialize:[2,3,1,""],serialize:[2,3,1,""]},"scannerpy.types.NumpyArrayInt32":{deserialize:[2,3,1,""],serialize:[2,3,1,""]},ops:{DetectGender:[3,0,1,""],DetectObjects:[3,0,1,""],EmbedFaces:[3,0,1,""],Histogram:[3,0,1,""],MTCNNDetectFaces:[3,0,1,""],OpenPose:[3,0,1,""],OpticalFlow:[3,0,1,""],Resize:[3,0,1,""],ShotBoundaries:[3,0,1,""]},scannerpy:{client:[2,1,0,"-"],column:[2,1,0,"-"],common:[2,1,0,"-"],config:[2,1,0,"-"],io:[2,1,0,"-"],job:[2,1,0,"-"],kernel:[2,1,0,"-"],kube:[2,1,0,"-"],op:[2,1,0,"-"],partitioner:[2,1,0,"-"],profiler:[2,1,0,"-"],sampler:[2,1,0,"-"],sink:[2,1,0,"-"],source:[2,1,0,"-"],storage:[2,1,0,"-"],streams:[2,1,0,"-"],types:[2,1,0,"-"]}},objnames:{"0":["py","function","Python function"],"1":["py","module","Python module"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:function","1":"py:module","2":"py:class","3":"py:method","4":"py:attribute","5":"py:exception"},terms:{"08_defining_cpp_op":11,"5gb":13,"640x480":16,"break":12,"byte":[2,3,11],"case":[11,16],"class":[2,11,12,16,17,18],"default":[2,6,11,14,16],"enum":2,"final":16,"float":[2,3],"function":[2,6,8,11,16,17,18],"import":[3,8,11,12,14,16,17,20],"int":[2,3,12],"long":[7,12],"new":[2,4,8,11,12,16,17,19],"null":2,"public":[13,16],"return":[2,3,11,14,16],"static":2,"true":[2,3,14],"try":[2,13,16],"while":[12,16],AWS:17,Added:2,And:17,But:12,For:[2,8,11,12,13,14,16,17],GCS:2,Not:2,One:11,Ops:[2,4,5,12,18],That:16,The:[0,2,3,4,7,8,10,11,12,13,16],Then:[7,13,16],There:7,These:[2,11,12,15],Use:2,Used:2,Useful:2,Will:[4,19],__init__:[2,11],__main__:[3,17],__name__:[3,17],_local_model_path:11,_model_url:11,_threshold:11,aac:6,abc:2,abil:2,abl:[2,11,17],about:[2,8,12,13,14,16],abov:[2,6,7,11,12],access:[2,4,14,17],accord:14,accur:2,achiev:12,acm:19,acmid:19,across:[8,11,12,18],activ:19,actual:[2,12],add:6,added:2,addit:[6,14],addition:6,address:[2,19],advanc:[4,12],aerial:18,affect:[2,12],after:[2,6,11,14,16],again:17,air:17,akin:10,alex:[4,19],all:[2,6,7,8,11,12,14,16,18],allow:[2,14,16],along:7,alreadi:[2,6],also:[6,7,8,11,13,14,17],alwai:2,amazon:[10,14],among:12,amount:[2,12],analysi:[19,20],analyz:17,ani:[2,3,6,8,13,16],annot:[2,11],anoth:[14,16],api:[16,17,20],apom:4,app:13,append:2,appli:2,applic:[4,8,13,14,16,17,18],appreci:19,appropri:[14,16],apt:6,arbitrari:18,arg:[2,16],argument:[2,8],around:14,arrai:[2,11,14],articl:[16,19],articleno:19,as_hwang:2,ascii:2,aspect:3,assum:[2,11],attempt:13,attribut:2,audio:16,august:19,auth:2,author:19,auto:20,autoconf:6,autogen:6,autom:10,automak:6,automat:[2,6,12],autoscal:2,avail:[2,6,12,20],avoid:[7,11,14],back:[2,7,11,14,17],backend:[2,5],bake:2,balanc:12,bandwidth:17,bar:[2,16],base:[2,6,12],bash:[6,7,13],basic:15,batch:2,batch_load:2,batch_siz:2,batchop:11,bbox:[2,3,17,20],bboxlist:[2,3],becaus:[8,11,12],becom:11,been:[11,14,17],befor:[2,11,14],behind:17,being:[2,11,12,17],below:[12,20],benefit:11,best:[2,4],between:[2,3,8,12,18,19,20],bin:[7,13],binari:[2,11,14,16],bind:[8,11],bit:7,bitrat:2,blob:[2,11,14],block:[2,16],bool:[2,3],boost:6,both:[2,3,8,11,18],bound:[3,12,14,17],boundari:3,bounded_st:2,boundingboxlist:11,box:[3,7,11,14,17],bracket:12,branch:7,brew:6,browser:12,bucket:14,buf:2,buffer:11,bug:4,build:[7,14,17],built:[7,11,14,16,20],builtin:16,builtin_function_or_method:2,bulk:[2,14],bulk_fetch_video_metadata:2,bulk_job_id:2,cabl:17,cache_mod:2,cachemod:2,caff:[6,7],caffe2:0,call:[2,11,12,14,16],callabl:2,callback:2,camera:17,can:[2,4,7,8,11,12,13,14,15,16,17],capabl:[8,16],captur:12,car:20,carnegi:19,carri:2,central:12,chair:20,chang:[2,8,11,20],channel:[4,16],check:[2,6,7,8,11,13,14,16,17],check_modul:2,checkout:16,checkpoint_frequ:2,chrome:[2,12],cite:19,citizen:18,clang:6,classmethod:2,cli:2,click:[2,12,16],client:[0,3,8,11,12,14,16,17],clip:[13,14,16],clonechannel:16,close:2,cloud:[2,4,7,10,12,14,17,18],cloud_config:2,cloudconfig:2,cls:2,cluster:[2,8,10,17],cluster_config:2,clusterconfig:2,cmake:6,cmu:4,code:[2,11,12,13,14,16],codec:2,col:2,collabor:19,collect:[2,8,12,14,16],collect_per_stream_arg:2,color:[3,16],color_rgb2grai:16,columntyp:2,com:[2,7,13,16],come:[7,16],command:[6,7,12],commit:2,common:[6,12],commonli:6,compat:7,compil:6,complet:[2,12,16],compon:0,compos:[7,13,16,18],compress:[2,12,14,16,17,18],compress_default:2,compress_video:2,comput:[0,2,3,4,11,12,14,17,20],compute_fac:3,compute_flow:20,compute_hand:3,concatent:2,concept:[4,18],conceptu:8,concurr:[2,12],conf:11,confid:11,config:[3,6,8,16],config_path:2,configur:[2,7,8,14,16],congratul:6,connect:[2,8,16],consid:2,consist:[7,16],constantli:12,construct:[2,14,16],constructor:11,consum:8,contact:[4,19],contain:[2,7,10,12,13,14,16],content:17,context:14,control:12,convers:16,convert:[11,17],convertcolor:16,coordin:12,copi:[2,6,14],core:[4,8],coreutil:6,correspond:[2,8,12],cost:17,could:2,coupl:[2,7],cpio:6,cpp:2,cpp_name:2,cpu:[2,7,11,12,13,16,17,18],cpu_pool:[2,12],creat:[2,7,8,14,16],create_object:2,crichton:[4,19],critic:[11,12],cuda:[6,7],cudnn6:7,cudnn7:7,cudnn:[6,7],curl:6,current:[2,11,14,16,17],custom:[0,2,11,14],customformatt:2,data:[0,2,4,6,8,11,12,13,16,18],data_buff:11,databas:[2,6,14,16],dataflow:18,dataset:17,datastor:14,date:2,datefmt:2,db_path:2,deal:12,debug:2,decad:17,decod:[12,18],decodevideo:12,decor:2,deep:11,def:[3,11,16,17],default_config:2,default_config_path:2,defin:[0,2,8,12],definit:2,delet:2,delete_t:2,dens:20,depend:[6,7,12],deploy:[2,10],describ:[2,4,12,14,16],descript:2,deseri:[2,11],design:[4,17,18],destin:12,detach:2,detail:[2,8,11,16,18],detect:[0,6,17],detect_fac:20,detect_object:20,detect_pos:20,detect_shot:20,detectgend:3,detectobject:3,determin:2,dev:6,devic:[2,12],device_id:2,device_set:[2,11],device_typ:2,devicehandl:2,devicetyp:[2,11],devstorag:2,dictionari:2,did:11,differ:[8,11,12],dimension:20,direct:[6,16],directli:[2,4,14,16,17],directori:[3,6,16],disk:2,displai:2,distinct:12,distribut:[7,12,17,18],docker:[13,16],document:20,doe:2,doi:19,domain:2,done:[11,16],down:13,download:[2,11,13],download_model:11,downsampl:16,draw:[3,17],draw_bbox:20,draw_flow_field:20,draw_pos:20,drawbbox:[3,17],drawn_fac:[3,17],dstack:16,dtype:11,dure:11,dynam:2,each:[2,3,6,8,11,12,16],easi:[2,17,20],easier:17,easiest:[7,10],east1:2,edg:[8,16],edu:4,effect:2,effici:[14,17,18,19],eigen:6,either:[2,10],element:[2,8,11,12,14,16,18],email:4,embed:0,embedfac:3,empti:8,enabl:[2,3,6,12,17],enable_watchdog:2,encodevideo:12,end:2,engin:17,entri:6,entrypoint:[0,2],enumer:2,enumerator_arg:2,environ:7,error:2,especi:11,essenti:[6,7],establish:16,estim:[2,3,12,16,17],estimate_s:2,etc:[12,14],evalu:3,even:[14,18],event:[2,12],eventu:2,everi:[2,8,11,16,17],exampl:[2,3,8,10,11,12,13,14,15,16,17,20],example100:8,example1:8,example2:8,example_fac:[3,17],exampleop:2,except:2,exclus:2,exeactli:18,execut:[0,2,8,11,18],exist:2,exit:16,expand:[2,12],expect:[2,11],explain:[11,12,14,16,17],explan:2,explicitli:[2,14],expos:4,express:18,extend:5,extern:[11,18],extra:2,extract:[17,20],face:[0,17],face_detect:[3,17,20],face_embed:3,facebook:17,facedet:20,factor:3,fail:2,failur:2,fals:2,fast:[12,14],faster:17,fatahalian:19,fdk:6,featur:[4,14,15,16],fed:2,fetch_resourc:[2,11],few:4,ffmpeg:6,field:3,file:[2,3,4,7,12,13,14,16],file_storag:14,file_stream:14,filesstorag:14,filesstream:14,filesystem:[2,14],fill:8,find:[6,11,20],finish:[6,16],first:[2,7,11,12,13,16,17,18],fix:3,flag:[2,3,14],flip:7,float32:11,flow:[0,11],flow_field:20,fmt:2,fns:2,follow:[4,6,11,12,14,16],forc:2,format:[2,14,16,18],formatexcept:2,formatt:2,formattim:2,found:15,four:[5,8],fps:2,fraction:2,frame0:20,frame:[2,3,8,11,12,14,16,17,18],frametyp:[2,3,11,16],framework:7,frequenc:11,from:[2,3,8,11,12,14,16,17,18,20],fromstr:11,frozenset:2,full:[7,8,20],further:8,futur:14,gather:[2,8,18],gdb:2,gender:0,gender_detect:3,gener:[2,8,12,16,17,20],get:[2,4,6,7,8,10,12,16,17],get_active_job:2,get_by_own:2,get_cpu:2,get_credenti:2,get_kube_info:2,get_mem:2,get_nam:2,get_object:2,get_pod:2,get_profil:[2,12],get_type_info:2,get_type_info_cpp:2,getmessag:2,gflag:6,git:[6,7],github:[4,17],githubusercont:[7,13,16],given:[2,8,11,18],glog:6,gnutl:6,goal:12,goe:8,going:[12,16],googl:[2,10,17],googleapi:[2,13,16],gpu:[2,7,8,11,12,13,17,18],gpu_pool:[2,12],gpu_typ:2,gpuop:11,gradual:4,grai:12,graph:[0,2,4,12,14,18,19],grayscale3_fram:16,grayscale_convers:[13,16],grayscale_fram:16,group:[2,12],group_siz:2,grpc:6,grpc_timeout:2,guarante:2,guess:[2,16],guid:[8,11,12,14,16],h264:16,halid:6,hand:[3,12],hand_num_scal:3,hand_scale_gap:3,handl:[0,2,12,18],hanrahan:19,happen:16,hardwar:17,has:[0,2,6,7,8,11,12,14,16,17],has_gpu:2,has_tabl:2,have:[2,4,7,8,11,12,13,16,17],haven:16,hdf5:6,healthi:2,height:[3,8,11,12,16],help:[2,4,7,12],here:[8,12,14,15,20],heurist:2,high:[2,6,12,20],histogram:[0,2],homebrew:6,hook:12,hour:17,how:[2,4,6,8,11,12,13,14,16,18],howev:[8,11,14,16],http:[2,4,7,13,16,19],human:[2,3],hundr:[12,18],hwang:6,ident:2,idl:12,ignor:2,imag:[2,3,6,7,10,14,16,17],image1:14,image2:14,image3:14,image_path:14,imgproc:[3,8,11,12,16],immedi:12,implement:[2,11,12,16,20],importantli:8,improv:[2,4,12,16],imwrit:20,includ:18,increas:[2,12],increment:2,independ:[2,8,12],index:[2,12],indic:[2,3,8,11,12],individu:[14,20],infer:[2,12],influenc:[2,12],info:2,inform:[2,7,8,12,13],ingest:2,ingest_video:2,init:[2,3],init_paramet:2,initi:[2,11,12,14],inplac:2,input:[0,2,3,11,12,14,16,17],input_column:2,input_fram:[8,11,12],input_stream:[8,14,16],insert:2,insid:[6,7,12,13,14,16],instal:[2,4,13,16],instanc:[2,7,8,11,12,16],instanti:[11,16],instead:[2,6,11,14,17],intead:7,integ:7,integr:[4,17],intel:6,intend:2,interfac:[12,16],intermedi:[2,12],intern:[2,14,16],interpol:3,interpret:2,interv:2,introduc:16,invoc:11,invok:[2,11,14],involv:7,io_packet_s:[2,12],iogener:2,ipynb:16,isn:2,iso8601:2,issn:19,issu:12,issue_d:19,item:14,its:[0,2,6,7,8,11],itself:14,job:[4,8,12,16],job_arg:2,job_id:[2,12],job_nam:2,job_statu:2,join:[2,4],journal:19,jpg:[14,20],jul:19,just:[2,7,17],kayvon:19,keep:[2,12,17],kernel:[0,7,11],kernelconfig:2,keyfram:2,keyframe_dist:2,keypoint:3,keyword:2,kick:8,kind:[2,20],kube:0,kube_vers:2,kubernet:[0,4,17],kwarg:2,label:12,lame:6,larg:[8,12,17],large_fram:8,large_output:8,large_stream:8,last:16,latenc:[2,12],latest:[2,7],lazili:14,ld_library_path:6,learn:[6,8,13,14,16],left:[2,12],len:2,length:8,less:3,let:[8,11,12,16],level:[12,16,20],leveldb:6,leverag:12,libass:6,libatla:6,libboost:6,libbz2:6,libc:6,libcap:6,libcurl3:6,libeigen3:6,libfreetype6:6,libgflag:6,libgnutl:6,libgoogl:6,libgtest:6,libgtk2:6,libhdf5:6,libjpeg:6,liblapack:6,libleveldb:6,liblmdb:6,liblzma:6,libopenbla:6,libopenjpeg:6,libpng:6,libpq:6,libpqxx:6,librari:[2,7,17,20],libsdl2:6,libsnappi:6,libssl:6,libsuitespars:6,libtbb:6,libtheora:6,libtool:6,libva:6,libvdpau:6,libvorbi:6,libvpx:6,libx264:6,libxcb1:6,libxcb:6,libxvidcor:6,light:10,lightweight:7,like:[2,4,7,11,14,16,18],likewis:[3,8],limit:[12,14],line:4,linux:[2,7,13],list:[2,3,8,11,12,14,16],listen:12,live:16,llvm:6,lmdb:6,load:[2,11,12,14],load_byt:2,load_op:2,load_sparsity_threshold:[2,12],load_thread:2,local:[2,6,7,12,16,18],localhost:16,locat:[11,14],log:2,logic:[2,16],logrecord:2,longer:2,look:[8,11,12,16],lookup:2,lossless:2,low:[17,20],machin:[2,4,7,8,10,11,12,16,17,18],machine_config:2,machine_param:2,machineconfig:2,machinetyp:2,machinetypenam:2,machinetypequant:2,maco:7,made:[0,8],mai:[2,13,18],main:[3,16,17],mainli:12,major:[6,18],make:[6,12,17,18],make_contain:2,make_deploy:2,manag:[2,6,7,10,13,16,18],mani:[2,11,15,20],manifold:17,manual:[2,12],map:2,master:[2,7,12,13,16],master_address:2,master_log:2,materi:2,matplotlib:16,max:[2,12],max_memory_util:2,maximum:2,mean:2,measur:2,media:17,mellon:19,mem:2,memori:[2,12,16],mercuri:6,messag:2,metadata:[8,14,17],method:[2,8,11,12,14],min:3,mkdir:6,mkdir_p:2,mkv:14,model:[3,11],model_directori:3,model_url:11,modul:16,monitor:2,montag:20,montage_img:20,month:19,more:[2,4,7,8,11,12,13,14,17],most:[7,8,12,17],motion:20,move:12,movement:18,mp4:[2,3,8,12,13,14,17],mtcnndetectfac:[3,17],much:17,multi:8,multipl:[2,12,14],must:[2,11],mutual:2,name:[2,11,14,16],namedframestorag:2,namedstorag:2,namedstream:2,namedvideostorag:2,namedvideostream:[2,3,8,12,14,16,17],namespac:2,nasm:6,nativ:17,natur:12,necessari:18,need:[2,8,11,12,14,16,18],net:4,network:[3,11,18],neural:11,never:[11,17],new_job_retries_limit:2,new_stream:[2,11],new_tabl:2,next:[3,11],no_delet:2,no_mast:2,no_start:2,no_workers_timeout:2,node:[2,4,8,16],non:[2,3],none:[2,12],note:[8,13],notebook:16,noth:2,notic:[8,11,12],now:[8,11,13],nproc:6,nullel:2,num_load_work:2,num_save_work:2,num_work:2,number:[2,3,8,12,16,19],numpag:19,numpi:[2,11,14],numpyarrayfloat32:[2,11],numpyarrayint32:2,nvidia:[2,7,13],objdet:20,object:[0,2,11,14,16,17],object_detect:[3,20],occupi:12,occur:[11,12],off:[8,20],offset:2,often:8,omit:2,onc:[2,11,12],one:[2,3,7,8,11,12,13,16],onli:[2,3,7,8,11,12,14,16,18],op_arg:2,op_nam:2,opcolumn:2,open:[11,17],opencv:[6,7],openpos:[3,6],oper:[0,2,4,6,12,16,18],operand:2,opgener:2,ops:[2,3,4,8,11,12,16,17,18],opt:[13,16],optflow:20,optic:[0,11],optical_flow:20,opticalflow:[3,11],optim:12,option:[2,6,7,12,13,14],opu:6,order:14,org:19,organ:4,other:[2,7,8,12,14,16,18],otherwis:2,our:[4,6,7,8,16],out:[2,6,7,8,10,11,12,13,14,16,17,18],output:[0,2,3,11,12,14,16,17],output_column:2,output_nam:2,output_op:[3,17],output_stream:[8,12,16],output_video:[3,17],output_video_stream:14,over:[2,8,11,14],overhead:20,overview:18,overwrit:2,own:[4,8,10,11,13,16],owner:2,p100:2,p_conn1:2,p_conn2:2,pack:[2,14],packag:7,packet:[2,12],page:[4,7,19],pair:2,parallel:[8,12,18],paramet:[2,3,4,8,16],part:[2,12,19],particular:2,partit:2,pass:[2,8,11,12,16],pat:19,path:[2,3,6,8,12,14,16,17],pattern:14,peopl:[3,20],per:[2,11],perf_param:2,perform:[2,4,6,8,11,16,17],perfparam:[2,3,12,16,17],persist:14,person_box:11,persondetectordnn:11,piec:11,pip3:[7,13,16],pip:6,pipelin:[2,12],pipeline_instances_per_nod:[2,12],pkg:6,place:[6,12],platform:[6,7,10,17],pleas:[4,19],point:[8,16],pokewatchdog:2,pom:[4,19],pool:[2,12],port:[2,7,13,16],portion:[8,12],pose:[0,6,17],pose_detect:[3,20],pose_num_scal:3,pose_scale_gap:3,pose_scales_gap:3,posedet:20,poselist:3,posit:2,posix:2,possibl:[4,13,18],postgresql:6,postgress:6,potenti:[2,12],pre:[0,7],prebuilt:7,preemptibl:2,prefetch_table_metadata:2,preparatori:2,preserv:3,preserve_aspect:3,previou:[2,17],previous:8,price:2,primarili:11,print:14,process:[2,3,4,6,11,12,14,16,17,18],processor:12,produc:[2,8,11,16],product:17,profil:[0,4,16],profiler_level:2,program:[4,16],progress:[2,12,16],project:[2,19],prompt:2,properti:[4,12],proto:2,proto_path:2,protobuf:[2,6],protobuf_nam:2,protobufgener:2,protobuftyp:2,provid:[2,6,7,10,11,12,13,14,15,16,17,20],publish:19,pubsub:2,pull:13,put:16,pybind:6,python3:[6,13,16],python:[0,14,17,20],python_kernel_fn:2,pythonpath:6,pytorch:0,qualiti:2,queri:6,question:19,queue:12,queue_size_per_pipelin:[2,12],quickli:[4,13],quickstart:4,rais:2,ran:12,random:14,rang:[2,16],rate:11,ratio:[2,3],raw:[2,7,13,14,16],rc5:6,read:[2,4,6,8,12,16,18],read_adv:2,read_lin:2,read_writ:2,readabl:2,reader:12,readi:[4,17],readonli:2,real:16,reason:2,receiv:8,recent:7,recommend:[7,12,16],record:[2,12],rectifi:16,recv_conn:2,red:17,redownload:11,reflect:12,region:14,regist:[2,3,11],register_modul:2,register_op:2,register_python_kernel:2,register_python_op:[2,11,16],register_typ:[2,11],registri:2,relat:2,relev:2,reli:17,repeat:2,repeatnul:2,replic:[12,16],replica:[2,12],repo:6,repons:2,report:4,repres:[2,4,8,11,12,14,16,18],represent:[2,17],request:[2,4,12,16],requir:[2,6,8,11,13,16],research:[4,7,13,16,19],reset:2,resid:[2,12],resiz:[0,2,8,11,12,16],resized_fram:[8,12,16],resourc:[2,12],resource_metr:2,respect:2,respons:12,rest:[8,11,14],restrict:8,result:[2,16,17],retri:2,retriev:2,rfc:2,root:2,row:[2,12],run:[0,2,3,4,7,8,10,11,12,13,16,17],runtim:[2,7,16],same:[2,8],sampl:[2,3,13,14,16,17],sample_video:[3,17],sampled_fram:[8,16],save:[3,12,16,17],save_mp4:[2,3,16,17],scalabl:[18,20],scale:[2,3,10,17,18,19],scanner:[4,5,7,8,10,11,13,14,15,17,18,19,20],scanner_config:2,scannerexcept:2,scannerpi:[3,8,11,12,14,16,17],scannerresearch:7,scannertool:[7,8,11,12,14,16,17],scannertools_caff:0,scannertypeinfo:2,schedul:18,scope:2,screenshot:12,script:6,sdl:6,section:[4,8,11],see:[2,8,11,12,16],select:[2,8,12,16],self:11,send:4,send_conn:2,separ:[8,11,12],sequenc:[2,3,8,11,14,16,18],serial:[2,3,6,11],serv:2,server:[2,16],servic:[2,7,10,13,14],service_kei:2,servicecontrol:2,session:0,set:[2,3,4,6,7,8,12,14,15],setup:[2,11],setup_with_resourc:[2,11],sever:[6,7,11],shape:14,share:[2,11],shelf:20,shm0:6,shot:0,shot_detect:[3,20],shotboundari:3,shotdet:20,should:[2,11,12,16],show:[2,12,17],show_progress:2,shtool:6,shutdown:2,side:7,siggraph:19,signatur:11,similar:0,simpl:[4,16,17],sinc:[11,12,14],singl:[8,11,12,16,18],sink:[5,12],sink_arg:2,sinkgener:2,size:[2,3,12],skeleton:20,slack:4,slice:2,slicelist:2,small:8,small_fram:8,small_output:8,small_stream:8,snappi:6,so_path:2,sole:12,some:[11,14],sometim:8,soon:7,sourc:[5,12,17],source_arg:2,sourcegener:2,space:2,spars:18,spawn:2,special:[2,14,16],specif:[2,14],specifi:[2,6,11,14,16],spent:12,spin:17,split:[2,18],sql:[6,14,16],squar:12,ssh:2,stage:12,stai:14,standard:[7,17],standard_librari:16,stanford:[4,19],start:[2,4,6,7,11,13,17],start_clust:2,start_mast:2,start_work:2,state:[2,18],statist:[2,17],statu:2,stencil:2,step:[2,4,6,10,15],still:[8,11,14],stop:2,stop_clust:2,storag:[0,5,12,13,16,17,18],storage_config:2,storage_key_id:2,storage_key_secret:2,storage_typ:14,storagebackend:[2,14],store:[2,4,11,12,16,18],storedstream:[2,14],storehous:6,str:[2,3,12],stream:[3,4,12,16,18],stream_arg:2,stream_paramet:2,streamsgen:8,streamsgener:2,stride:[2,8,16],strided_rang:2,stridedrang:2,string:[2,12],style:2,subject:4,submit:12,subsampl:[2,16],subset:[2,8,12],substream:2,summar:2,support:[2,5,6,7,8,11,13,14,16,17,18],suppos:2,sure:6,surround:17,swig:6,syntax:[11,16],system:[2,5,14,17,18],szip:6,tabl:[2,14],table_nam:2,tag:7,take:[2,7,11,12,16],talk:4,target:[2,3,11],task:[2,12],task_timeout:2,taskpartition:2,team:4,tell:[6,8,11,12],templat:2,tensorflow:0,tesla:2,test:[2,7],texi2html:6,texinfo:6,text:[2,14],than:[3,7],thei:[2,6,8,11,12,16,18],them:[2,3,6,11,12,14,16,17],themselv:12,theora:6,thi:[2,6,7,8,11,12,13,14,16,17,18,20],think:[7,8],third:8,those:[6,8,12],three:[0,6,8,11,12,16],threshold:11,through:[2,8,11],throughput:12,thu:12,time:[2,7,11,12,13,16],timelin:12,titl:19,tmp:11,to_proto:2,tobyt:11,togeth:[2,12,16,18],told:[14,16],toml:2,took:12,tool:[10,12],top:[2,6,12,16],total:2,total_memori:2,total_time_interv:2,trace:2,track:12,tracker:0,tran:19,transform:[8,11,16],trend:17,troubl:4,tune:[2,12,16],tupl:2,tutori:[11,16],tweak:4,two:[8,11,20],typ:2,type:[3,8,12,14],unbounded_st:2,under:[12,14,16],understand:[11,12,16,17],uniformlist:2,union:2,univers:19,unless:[2,14],unoffici:7,unpack_str:2,unslic:2,unspecifi:2,until:[2,16],unzip:6,upgrad:[7,13,16],upon:12,url:19,usa:19,usag:[2,12],use:[2,3,7,8,11,12,16,17,19,20],used:[2,12,14,16,17],useful:[7,12],user:[2,7,11,12],uses:[2,7],usestim:2,using:[2,3,4,6,7,8,10,11,12,14,16,20],usual:12,util:[0,2,7,11,13,17],valid:2,valu:[2,12,16],variabl:2,variablelist:2,variad:2,variadic_input:2,varieti:14,variou:12,vector:[3,20],version:[2,7,16,17],versu:12,via:[2,6,8,10],video:[2,3,6,8,11,12,13,17,18,19,20],video_path:[3,17],video_stream:[8,12,14],view:[12,18],virtual:7,vis:[3,17,20],visit:[2,16],visual:[2,20],volum:19,wai:[4,5,7,10,11],wait:[2,12],wait_for_server_shutdown:2,wait_on_job:2,wait_on_job_gen:2,walkthrough:[4,12,13],want:[2,4,7,8,13,16],warmup:2,watchdog:2,wcrichto:4,web:10,week:7,weight:[10,11],were:[12,14],west:14,wget:[6,7,13,16],what:[2,12],when:[2,8,11,12,14],whenev:11,where:[2,3,6,7,12,14],whether:2,which:[2,4,6,7,8,11,12,13,14,16,17,18],why:7,wide:6,width:[3,8,11,12,16],willcrichton:4,window:11,within:[12,18],without:[2,14],won:12,work:[8,12,13,16,18],work_io_ratio:2,work_packet_s:[2,12],worker:[2,7,12],worker_log:2,would:[2,14],write:[0,2,4,6,8,11,12,14,16,18],write_trac:[2,12],writer:12,written:14,www:[2,4],x264:6,x265:6,xfixes0:6,xvid:6,xxx:8,yasm:6,year:19,yet:16,yield:2,yml:[7,13,16],york:19,you:[2,4,6,7,8,12,13,16,17,19],your:[2,4,6,7,10,11,12,13,16,17,18,19],yourself:16,zero:3,zip:11,zlib1g:6,zone:2},titles:["API Reference","Scanner C++ API","Scanner Python API","Scannertools API","Guide","Extensions","Building Scanner from source","Installation","Computation Graphs","&lt;no title&gt;","Kubernetes Integration","Operations","Performance Profiling","Quickstart","Stored Streams","Tutorials","Walkthroughs","&lt;no title&gt;","&lt;no title&gt;","Publications","Scannertools"],titleterms:{"export":16,"public":19,access:20,advanc:16,api:[0,1,2,3],app:16,backend:14,base:16,batch:[8,11],build:6,caffe2:3,citat:19,client:2,column:2,common:2,comput:[8,16],config:[2,11],convert:16,data:14,declar:11,defin:[11,16],delet:14,dep:6,detect:[3,20],devic:11,docker:7,embed:3,execut:[12,16],extens:5,face:[3,20],fetch:11,flow:[3,20],frame:20,from:[6,7],gender:3,graph:[8,16],grayscal:16,guid:4,histogram:3,homebrew:7,index:14,init:11,inplac:14,input:8,instal:[6,7],integr:10,job:2,jupyt:16,kernel:2,kube:2,kubernet:10,level:6,librari:0,local:14,maco:6,main:0,model:12,modul:2,more:16,mp4:16,multipl:8,next:16,object:[3,20],oper:[3,8,11,14],optic:[3,20],output:8,overview:[8,11,12,14],packag:6,paper:19,paramet:[11,12],partition:2,perform:12,pose:[3,20],process:8,profil:[2,12],properti:11,protobuf_gener:2,python:[2,6,11],pytorch:3,quickstart:13,random:20,read:14,refer:0,resiz:3,resourc:11,run:6,sampler:2,scanner:[0,1,2,6,12,16],scannerpi:[0,2,6],scannertool:[0,3,20],scannertools_caff:3,set:11,shot:[3,20],sink:2,sourc:[2,6,7],standard:0,start:16,stencil:11,step:16,storag:[2,3,14],store:[8,14],stream:[2,8,11,14],support:4,system:6,tensorflow:3,through:16,trace:12,tracker:3,tunabl:12,tutori:15,type:[2,11],ubuntu:6,util:3,video:[14,16],visual:12,walk:16,walkthrough:16,write:3}})
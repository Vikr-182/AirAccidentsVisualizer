import json
with open("./cleaned_data.json") as f:
    data = json.load(f)
'''
Ferry/positioning, Domestic Scheduled Passenger, Military, Ambulance
Domestic Non Scheduled Passenger, Cargo, Private, Test, Executive,
International Scheduled Passenger, Int\'l Non Scheduled Passenger,
 Unknown, Training, Illegal Flight, Official state flight, Passenger,
 Parachuting. Survey/research, Fire fighting,  Agricultural
 '''
services = ['Ambulance','Executive','Survey/research','Fire fighting']
passengers = ['Domestic Scheduled Passenger','Domestic Non Scheduled Passenger','International Scheduled Passenger','Int\'l Non Scheduled Passenger',' Passenger']
military = ['Military','Official state flight']
cargo = ['Cargo']
misc = ['Private','Parachuting','Illegal Flight','Ferry/positioning','Test','Training','Unknown']

li = list(data.keys())
service_data = []
passenger_data = []
military_data = []
cargo_data = []
misc_data = []



fin = {}
fin["name"]="All crashes"
fin["children"]=[]



for i in range(len(li)):
    k = li[i]
    n = data[k]["Nature:"]
    if n in services:
        service_data.append(data[k])
    elif n in passengers:
        passenger_data.append(data[k])
    elif n in military:
        military_data.append(data[k])
    elif n in cargo:
        cargo_data.append(data[k])
    elif n in misc:
        misc_data.append(data[k])


print(len(service_data))
print(len(passenger_data))
print(len(military_data))
print(len(cargo_data))
print(len(misc_data))

servdict={}
mildict={}
miscdict={}

passendict={}
# print(servdict.keys())



def layer1(fl_data,fldict):
    for i in fl_data:
        # print(i)
        if i["Nature:"] in fldict.keys():
            fldict[i["Nature:"]]+=1
        else:
            fldict[i["Nature:"]] = 1
    print(fldict)

layer1(service_data, servdict)
layer1(military_data, mildict)
layer1(misc_data, miscdict)

layer1(passenger_data, passendict)


def addlayer1(fldict,name):
    newdict={}
    newdict['name']=name
    newdict['children']=[]
    for i in fldict:
        print(i,"lololol")
        temp={}
        temp['name'] = i 
        temp['size'] = fldict[i]
        newdict['children'].append(temp)
    print(newdict)
    fin['children'].append(newdict)
    # print(i, "   ", miscdict[i])


addlayer1(servdict,"Service")
addlayer1(mildict,"Military")
addlayer1(miscdict,"Miscelaneous")

addlayer1(passendict,"PAssenger")

def addlayer0(fl_data,name):
    newdict={}
    newdict['name']=name
    newdict['size']=len(fl_data)
    fin['children'].append(newdict)

addlayer0(cargo_data,"Cargo")


# fin['children'].append
print(servdict)
print("---------------------")
print(fin)
# print(fin['children'][0]['children'])







"""
## FINAL JSON ###
anna = {}
anna["name"] = "flare"
anna["children"] = [
        {
            "name":"services",
            "children": []
        },
        {
            "name":"passenger",
            "children": []
        },
        {
            "name":"military",
            "children": []
        },
        {
            "name":"cargo",
            "children": []
        },
        {
            "name":"misc",
            "children": []
        }
]
for i in range(len(service)):
    val = {"name"}
"""
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace angularvid
{
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService]
    [WebMethod]
public void GetStudentsByName(string name)
{
    List<Student> listStudents = new List<Student>();

    string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
    using (SqlConnection con = new SqlConnection(cs))
    {
        SqlCommand cmd =
            new SqlCommand("Select * from tblStudents where name like @name", con);
        SqlParameter param = new SqlParameter()
        {
            ParameterName = "@name",
            Value = name + "%"
        };
        cmd.Parameters.Add(param);

        con.Open();
        SqlDataReader rdr = cmd.ExecuteReader();
        while (rdr.Read())
        {
            Student student = new Student();
            student.id = Convert.ToInt32(rdr["Id"]);
            student.name = rdr["Name"].ToString();
            student.gender = rdr["Gender"].ToString();
            student.city = rdr["City"].ToString();
            listStudents.Add(student);
        }
    }

    JavaScriptSerializer js = new JavaScriptSerializer();
    Context.Response.Write(js.Serialize(listStudents));
}